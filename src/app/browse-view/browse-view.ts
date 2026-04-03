import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DataService } from '../services/data.service';
import { Snapshot, VersionEntry } from '../models/snapshot.model';
import { VersionMetaCardComponent } from '../version-meta-card/version-meta-card';

@Component({
  selector: 'app-browse-view',
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatProgressSpinnerModule, VersionMetaCardComponent],
  templateUrl: './browse-view.html',
  styleUrl: './browse-view.scss',
})
export class BrowseViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);

  versions = signal<VersionEntry[]>([]);
  selectedMajor = signal<number | null>(null);
  snapshot = signal<Snapshot | null>(null);
  selectedFile = signal<string | null>(null);
  loading = signal(false);

  sortedFiles = computed(() => {
    const snap = this.snapshot();
    if (!snap) return [];
    return Object.keys(snap.files).sort();
  });

  selectedContent = computed(() => {
    const snap = this.snapshot();
    const file = this.selectedFile();
    return snap && file ? snap.files[file] ?? '' : '';
  });

  ngOnInit() {
    this.dataService.getVersions().subscribe(versions => {
      this.versions.set(versions);
      const major = Number(this.route.snapshot.params['version']);
      if (major) {
        this.selectedMajor.set(major);
        this.loadSnapshot(major);
      }
    });
  }

  onVersionChange(major: number) {
    this.selectedMajor.set(major);
    this.selectedFile.set(null);
    this.router.navigate(['/browse', major]);
    this.loadSnapshot(major);
  }

  private loadSnapshot(major: number) {
    this.loading.set(true);
    this.snapshot.set(null);
    this.dataService.getSnapshot(major).subscribe({
      next: snap => { this.snapshot.set(snap); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
}
