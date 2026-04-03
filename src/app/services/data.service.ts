import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Snapshot, VersionEntry } from '../models/snapshot.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);

  private versionsCache$: Observable<VersionEntry[]> | null = null;
  private snapshotCache = new Map<number, Observable<Snapshot>>();

  getVersions(): Observable<VersionEntry[]> {
    if (!this.versionsCache$) {
      this.versionsCache$ = this.http
        .get<VersionEntry[]>('data/versions.json')
        .pipe(shareReplay(1));
    }
    return this.versionsCache$;
  }

  getSnapshot(angularMajor: number): Observable<Snapshot> {
    if (!this.snapshotCache.has(angularMajor)) {
      const obs = this.http
        .get<Snapshot>(`data/snapshots/${angularMajor}/default.json`)
        .pipe(shareReplay(1));
      this.snapshotCache.set(angularMajor, obs);
    }
    return this.snapshotCache.get(angularMajor)!;
  }
}
