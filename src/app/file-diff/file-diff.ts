import { Component, Input, OnInit, OnDestroy, computed, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DiffResult } from '../models/snapshot.model';

interface DiffLine {
  type: 'added' | 'removed' | 'context' | 'hunk';
  content: string;
}

export interface SideBySideRow {
  type: 'changed' | 'context' | 'hunk';
  left: string | null;
  right: string | null;
}

@Component({
  selector: 'app-file-diff',
  imports: [CommonModule, MatIconModule, MatButtonToggleModule, MatTooltipModule],
  templateUrl: './file-diff.html',
  styleUrl: './file-diff.scss',
})
export class FileDiffComponent implements OnInit, OnDestroy {
  @Input() set file(value: string | null) { this._file.set(value); }
  @Input() set diffResult(value: DiffResult) { this._diffResult.set(value); }
  @Input() fromMajor: number | null = null;
  @Input() toMajor: number | null = null;

  protected _file = signal<string | null>(null);
  private _diffResult = signal<DiffResult>({});
  viewMode = signal<'inline' | 'side-by-side'>('inline');
  copiedSide = signal<'from' | 'to' | null>(null);

  private mobileQuery = window.matchMedia('(max-width: 600px)');
  private onMobileChange = (e: MediaQueryListEvent) => {
    if (e.matches) this.viewMode.set('inline');
  };

  constructor() {
    effect(() => {
      if (this.entry()?.status !== 'modified') this.viewMode.set('inline');
    });
  }

  ngOnInit() {
    if (this.mobileQuery.matches) this.viewMode.set('inline');
    this.mobileQuery.addEventListener('change', this.onMobileChange);
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.onMobileChange);
  }

  copy(side: 'from' | 'to') {
    const content = side === 'from' ? this.entry()!.fromContent : this.entry()!.toContent;
    navigator.clipboard.writeText(content).then(() => {
      this.copiedSide.set(side);
      setTimeout(() => this.copiedSide.set(null), 2000);
    });
  }

  entry = computed(() => {
    const file = this._file();
    const result = this._diffResult();
    return file ? result[file] ?? null : null;
  });

  lines = computed((): DiffLine[] => {
    const e = this.entry();
    if (!e) return [];
    if (e.status === 'unchanged') {
      return e.fromContent.split('\n').map(line => ({ type: 'context', content: line }));
    }
    return this.parsePatch(e.patch);
  });

  sideBySideRows = computed((): SideBySideRow[] => {
    const lines = this.lines();
    const rows: SideBySideRow[] = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (line.type === 'hunk') {
        rows.push({ type: 'hunk', left: line.content, right: line.content });
        i++;
      } else if (line.type === 'context') {
        rows.push({ type: 'context', left: line.content, right: line.content });
        i++;
      } else {
        const removed: string[] = [];
        const added: string[] = [];
        while (i < lines.length && lines[i].type === 'removed') { removed.push(lines[i].content); i++; }
        while (i < lines.length && lines[i].type === 'added') { added.push(lines[i].content); i++; }
        const len = Math.max(removed.length, added.length);
        for (let j = 0; j < len; j++) {
          rows.push({ type: 'changed', left: removed[j] ?? null, right: added[j] ?? null });
        }
      }
    }
    return rows;
  });

  private parsePatch(patch: string): DiffLine[] {
    const lines: DiffLine[] = [];
    for (const line of patch.split('\n')) {
      if (line.startsWith('+++') || line.startsWith('---') || line.startsWith('\\') || line.startsWith('Index:') || line.startsWith('===')) continue;
      if (line.startsWith('@@')) {
        lines.push({ type: 'hunk', content: line });
      } else if (line.startsWith('+')) {
        lines.push({ type: 'added', content: line.slice(1) });
      } else if (line.startsWith('-')) {
        lines.push({ type: 'removed', content: line.slice(1) });
      } else {
        lines.push({ type: 'context', content: line.slice(1) });
      }
    }
    return lines;
  }
}
