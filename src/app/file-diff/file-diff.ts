import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DiffResult } from '../models/snapshot.model';

interface DiffLine {
  type: 'added' | 'removed' | 'context' | 'hunk';
  content: string;
}

@Component({
  selector: 'app-file-diff',
  imports: [CommonModule, MatIconModule],
  templateUrl: './file-diff.html',
  styleUrl: './file-diff.scss',
})
export class FileDiffComponent {
  @Input() set file(value: string | null) { this._file.set(value); }
  @Input() set diffResult(value: DiffResult) { this._diffResult.set(value); }

  protected _file = signal<string | null>(null);
  private _diffResult = signal<DiffResult>({});

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

  private parsePatch(patch: string): DiffLine[] {
    const lines: DiffLine[] = [];
    for (const line of patch.split('\n')) {
      if (line.startsWith('+++') || line.startsWith('---') || line.startsWith('\\')) continue;
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
