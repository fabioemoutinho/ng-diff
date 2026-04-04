import { Component, Input, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffService, DepChange } from '../services/diff.service';
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

  dependencies: DepChange[] = [];
  devDependencies: DepChange[] = [];

  private recompute() {
    if (this._from && this._to) {
      const all = this.diffService.parseDepsChange(this._from, this._to);
      this.dependencies = all.filter(c => c.group === 'dependencies');
      this.devDependencies = all.filter(c => c.group === 'devDependencies');
    }
  }

  changeType(c: DepChange): 'added' | 'removed' | 'major' | 'minor' | 'patch' {
    if (!c.fromVersion) return 'added';
    if (!c.toVersion) return 'removed';
    const [fMaj, fMin] = c.fromVersion.split('.').map(Number);
    const [tMaj, tMin] = c.toVersion.split('.').map(Number);
    if (tMaj !== fMaj) return 'major';
    if (tMin !== fMin) return 'minor';
    return 'patch';
  }
}
