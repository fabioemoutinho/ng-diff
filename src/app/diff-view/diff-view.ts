import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DataService } from '../services/data.service';
import { DiffService } from '../services/diff.service';
import { VersionEntry, Snapshot, DiffResult } from '../models/snapshot.model';
import { FileTreeComponent } from '../file-tree/file-tree';
import { FileDiffComponent } from '../file-diff/file-diff';
import { DepsTabComponent } from '../deps-tab/deps-tab';
import { VersionMetaCardComponent } from '../version-meta-card/version-meta-card';

@Component({
  selector: 'app-diff-view',
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    FileTreeComponent,
    FileDiffComponent,
    DepsTabComponent,
    VersionMetaCardComponent,
  ],
  templateUrl: './diff-view.html',
  styleUrl: './diff-view.scss',
})
export class DiffViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);
  private diffService = inject(DiffService);

  versions = signal<VersionEntry[]>([]);
  versionsDesc = computed(() => this.versions().slice().reverse());
  fromMajor = signal<number | null>(null);
  toMajor = signal<number | null>(null);
  selectedFile = signal<string | null>(null);

  fromSnapshot = signal<Snapshot | null>(null);
  toSnapshot = signal<Snapshot | null>(null);
  diffResult = signal<DiffResult | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  summary = computed(() => {
    const diff = this.diffResult();
    if (!diff) return null;
    const entries = Object.values(diff);
    return {
      added: entries.filter(e => e.status === 'added').length,
      removed: entries.filter(e => e.status === 'removed').length,
      modified: entries.filter(e => e.status === 'modified').length,
    };
  });

  ngOnInit() {
    this.dataService.getVersions().subscribe({
      next: (versions) => {
        this.versions.set(versions);
        const params = this.route.snapshot.params;
        const from = params['from'] ? Number(params['from']) : null;
        const to = params['to'] ? Number(params['to']) : null;
        const file = params['file'] ? decodeURIComponent(params['file']) : null;

        if (from && to) {
          this.fromMajor.set(from);
          this.toMajor.set(to);
          this.selectedFile.set(file);
          this.loadDiff(from, to);
        } else if (versions.length >= 2) {
          const latest = versions[versions.length - 1].angularMajor;
          const prev = versions[versions.length - 2].angularMajor;
          this.router.navigate(['/diff', prev, latest], { replaceUrl: true });
        }
      },
      error: () => this.error.set('Failed to load version list.'),
    });
  }

  onFromChange(major: number) {
    this.fromMajor.set(major);
    this.navigate(major, this.toMajor()!);
  }

  onToChange(major: number) {
    this.toMajor.set(major);
    this.navigate(this.fromMajor()!, major);
  }

  stepBoth(dir: 1 | -1) {
    const versions = this.versions();
    const fromIdx = versions.findIndex(v => v.angularMajor === this.fromMajor());
    const toIdx = versions.findIndex(v => v.angularMajor === this.toMajor());
    const nextFrom = versions[fromIdx + dir];
    const nextTo = versions[toIdx + dir];
    if (nextFrom && nextTo) this.navigate(nextFrom.angularMajor, nextTo.angularMajor);
  }

  canStepBoth(dir: 1 | -1): boolean {
    const versions = this.versions();
    const fromIdx = versions.findIndex(v => v.angularMajor === this.fromMajor());
    const toIdx = versions.findIndex(v => v.angularMajor === this.toMajor());
    return !!versions[fromIdx + dir] && !!versions[toIdx + dir];
  }

  onFileSelect(file: string) {
    this.selectedFile.set(file);
    const from = this.fromMajor()!;
    const to = this.toMajor()!;
    this.router.navigate(['/diff', from, to, encodeURIComponent(file)]);
  }

  jumpToLatest() {
    const versions = this.versions();
    if (versions.length < 2) return;
    const latest = versions[versions.length - 1].angularMajor;
    const prev = versions[versions.length - 2].angularMajor;
    this.navigate(prev, latest);
  }

  copyShareUrl() {
    navigator.clipboard.writeText(window.location.href);
  }

  private navigate(from: number, to: number) {
    this.fromMajor.set(from);
    this.toMajor.set(to);
    this.selectedFile.set(null);
    this.router.navigate(['/diff', from, to]);
    this.loadDiff(from, to);
  }

  private loadDiff(from: number, to: number) {
    this.loading.set(true);
    this.diffResult.set(null);
    this.fromSnapshot.set(null);
    this.toSnapshot.set(null);
    this.error.set(null);

    forkJoin({
      from: this.dataService.getSnapshot(from),
      to: this.dataService.getSnapshot(to),
    }).subscribe({
      next: ({ from: fromSnap, to: toSnap }) => {
        this.fromSnapshot.set(fromSnap);
        this.toSnapshot.set(toSnap);
        this.diffResult.set(this.diffService.compute(fromSnap, toSnap));
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load snapshots.');
        this.loading.set(false);
      },
    });
  }
}
