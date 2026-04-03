import { Component, Input, Output, EventEmitter, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DiffResult, FileStatus } from '../models/snapshot.model';

interface TreeNode {
  name: string;
  path: string;
  isDir: boolean;
  status: FileStatus | null;
  children: TreeNode[];
  expanded: boolean;
}

@Component({
  selector: 'app-file-tree',
  imports: [CommonModule, MatIconModule, MatButtonToggleModule, MatTooltipModule],
  templateUrl: './file-tree.html',
  styleUrl: './file-tree.scss',
})
export class FileTreeComponent {
  @Input() set diffResult(value: DiffResult) {
    this._diffResult = value;
    this.buildTree();
  }
  @Input() selectedFile: string | null = null;
  @Output() fileSelected = new EventEmitter<string>();

  changedOnly = signal(false);
  private _diffResult: DiffResult = {};
  tree = signal<TreeNode[]>([]);

  filteredTree = computed(() => {
    if (!this.changedOnly()) return this.tree();
    return this.filterChanged(this.tree());
  });

  private buildTree() {
    const root: TreeNode[] = [];

    for (const [filePath, entry] of Object.entries(this._diffResult)) {
      const parts = filePath.split('/');
      let current = root;
      let accumulated = '';

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        accumulated = accumulated ? `${accumulated}/${part}` : part;
        const isLast = i === parts.length - 1;

        let node = current.find(n => n.name === part);
        if (!node) {
          node = {
            name: part,
            path: accumulated,
            isDir: !isLast,
            status: isLast ? entry.status : null,
            children: [],
            expanded: true,
          };
          current.push(node);
        }

        if (!isLast) {
          current = node.children;
          // Propagate status up to directories
          if (entry.status !== 'unchanged') {
            if (!node.status || node.status === 'unchanged') {
              node.status = entry.status;
            }
          }
        }
      }
    }

    this.sortTree(root);
    this.tree.set(root);
  }

  private sortTree(nodes: TreeNode[]) {
    nodes.sort((a, b) => {
      if (a.isDir !== b.isDir) return a.isDir ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    for (const node of nodes) {
      if (node.children.length) this.sortTree(node.children);
    }
  }

  private filterChanged(nodes: TreeNode[]): TreeNode[] {
    return nodes
      .filter(n => n.status !== 'unchanged')
      .map(n => ({ ...n, children: this.filterChanged(n.children) }));
  }

  toggleDir(node: TreeNode) {
    node.expanded = !node.expanded;
    this.tree.set([...this.tree()]);
  }

  selectFile(node: TreeNode) {
    if (!node.isDir) this.fileSelected.emit(node.path);
  }

  statusIcon(status: FileStatus | null): string {
    switch (status) {
      case 'added': return 'add_circle';
      case 'removed': return 'remove_circle';
      case 'modified': return 'edit';
      default: return '';
    }
  }

  statusClass(status: FileStatus | null): string {
    return status ?? 'unchanged';
  }
}
