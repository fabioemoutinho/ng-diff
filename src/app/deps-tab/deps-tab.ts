import { Component, Input, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffService } from '../services/diff.service';
import { Snapshot } from '../models/snapshot.model';

@Component({
  selector: 'app-deps-tab',
  imports: [CommonModule],
  templateUrl: './deps-tab.html',
  styleUrl: './deps-tab.scss',
})
export class DepsTabComponent {
  private diffService = inject(DiffService);

  @Input() set from(v: Snapshot) { this._from = v; this.recompute(); }
  @Input() set to(v: Snapshot) { this._to = v; this.recompute(); }

  private _from?: Snapshot;
  private _to?: Snapshot;
  changes: ReturnType<DiffService['parseDepsChange']> = [];

  private recompute() {
    if (this._from && this._to) {
      this.changes = this.diffService.parseDepsChange(this._from, this._to);
    }
  }

  changeType(c: { fromVersion: string | null; toVersion: string | null }): 'added' | 'removed' | 'changed' {
    if (!c.fromVersion) return 'added';
    if (!c.toVersion) return 'removed';
    return 'changed';
  }
}
