import { Component, Input, OnInit, OnDestroy, computed, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { diffWordsWithSpace } from 'diff';
import { DiffResult } from '../models/snapshot.model';

interface DiffLine {
  type: 'added' | 'removed' | 'context' | 'hunk';
  content: string;
  leftLineNo: number | null;
  rightLineNo: number | null;
}

export interface SideBySideRow {
  type: 'changed' | 'context' | 'hunk';
  left: string | null;
  right: string | null;
  leftLineNo: number | null;
  rightLineNo: number | null;
  leftHtml: SafeHtml | null;
  rightHtml: SafeHtml | null;
}

@Component({
  selector: 'app-file-diff',
  imports: [CommonModule, MatIconModule, MatButtonToggleModule, MatTooltipModule],
  templateUrl: './file-diff.html',
  styleUrl: './file-diff.scss',
})
export class FileDiffComponent implements OnInit, OnDestroy {
  private sanitizer = inject(DomSanitizer);

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
      return e.fromContent.split('\n').map((line, i) => ({
        type: 'context', content: line, leftLineNo: i + 1, rightLineNo: i + 1,
      }));
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
        rows.push({ type: 'hunk', left: line.content, right: line.content, leftLineNo: null, rightLineNo: null, leftHtml: null, rightHtml: null });
        i++;
      } else if (line.type === 'context') {
        rows.push({ type: 'context', left: line.content, right: line.content, leftLineNo: line.leftLineNo, rightLineNo: line.rightLineNo, leftHtml: null, rightHtml: null });
        i++;
      } else {
        const removed: DiffLine[] = [];
        const added: DiffLine[] = [];
        while (i < lines.length && lines[i].type === 'removed') { removed.push(lines[i]); i++; }
        while (i < lines.length && lines[i].type === 'added') { added.push(lines[i]); i++; }
        const len = Math.max(removed.length, added.length);
        for (let j = 0; j < len; j++) {
          const l = removed[j] ?? null;
          const r = added[j] ?? null;
          let leftHtml: SafeHtml | null = null;
          let rightHtml: SafeHtml | null = null;
          if (l && r) {
            const wordDiff = diffWordsWithSpace(l.content, r.content);
            leftHtml = this.segmentsToHtml(wordDiff.filter(c => !c.added), true);
            rightHtml = this.segmentsToHtml(wordDiff.filter(c => !c.removed), false);
          }
          rows.push({
            type: 'changed',
            left: l?.content ?? null,
            right: r?.content ?? null,
            leftLineNo: l?.leftLineNo ?? null,
            rightLineNo: r?.rightLineNo ?? null,
            leftHtml,
            rightHtml,
          });
        }
      }
    }
    return rows;
  });

  private segmentsToHtml(changes: { value: string; added?: boolean; removed?: boolean }[], highlightRemoved: boolean): SafeHtml {
    const html = changes.map(c => {
      const escaped = c.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const highlight = highlightRemoved ? c.removed : c.added;
      return highlight ? `<span class="word-highlight">${escaped}</span>` : escaped;
    }).join('');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private parsePatch(patch: string): DiffLine[] {
    const lines: DiffLine[] = [];
    let leftLine = 0;
    let rightLine = 0;

    for (const line of patch.split('\n')) {
      if (line.startsWith('+++') || line.startsWith('---') || line.startsWith('\\') || line.startsWith('Index:') || line.startsWith('===')) continue;
      if (line.startsWith('@@')) {
        const match = line.match(/@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/);
        if (match) { leftLine = parseInt(match[1], 10); rightLine = parseInt(match[2], 10); }
        lines.push({ type: 'hunk', content: line, leftLineNo: null, rightLineNo: null });
      } else if (line.startsWith('+')) {
        lines.push({ type: 'added', content: line.slice(1), leftLineNo: null, rightLineNo: rightLine++ });
      } else if (line.startsWith('-')) {
        lines.push({ type: 'removed', content: line.slice(1), leftLineNo: leftLine++, rightLineNo: null });
      } else {
        lines.push({ type: 'context', content: line.slice(1), leftLineNo: leftLine++, rightLineNo: rightLine++ });
      }
    }
    return lines;
  }
}
