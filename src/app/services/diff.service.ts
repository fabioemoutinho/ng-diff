import { Injectable } from '@angular/core';
import { createTwoFilesPatch } from 'diff';
import { DiffResult, FileStatus, Snapshot } from '../models/snapshot.model';

@Injectable({ providedIn: 'root' })
export class DiffService {
  compute(from: Snapshot, to: Snapshot): DiffResult {
    const allFiles = new Set([
      ...Object.keys(from.files),
      ...Object.keys(to.files),
    ]);

    const result: DiffResult = {};

    for (const file of allFiles) {
      const fromContent = from.files[file] ?? '';
      const toContent = to.files[file] ?? '';

      let status: FileStatus;
      if (!(file in from.files)) {
        status = 'added';
      } else if (!(file in to.files)) {
        status = 'removed';
      } else if (fromContent === toContent) {
        status = 'unchanged';
      } else {
        status = 'modified';
      }

      const patch = (status === 'modified' || status === 'added' || status === 'removed')
        ? createTwoFilesPatch(file, file, fromContent, toContent, undefined, undefined, { context: 3 })
        : '';

      result[file] = { status, patch, fromContent, toContent };
    }

    return result;
  }

  parseDepsChange(from: Snapshot, to: Snapshot): DepChange[] {
    const parsePkg = (s: Snapshot) => {
      try { return JSON.parse(s.files['package.json'] ?? '{}'); } catch { return {}; }
    };
    const fromPkg = parsePkg(from);
    const toPkg = parsePkg(to);

    const changes: DepChange[] = [];

    const groups: Array<'dependencies' | 'devDependencies'> = ['dependencies', 'devDependencies'];
    for (const group of groups) {
      const fromDeps = (fromPkg[group] ?? {}) as Record<string, string>;
      const toDeps = (toPkg[group] ?? {}) as Record<string, string>;
      const allKeys = new Set([...Object.keys(fromDeps), ...Object.keys(toDeps)]);

      for (const name of allKeys) {
        const fromVer = fromDeps[name] ?? null;
        const toVer = toDeps[name] ?? null;
        if (fromVer === toVer) continue;
        changes.push({ name, fromVersion: fromVer, toVersion: toVer, group });
      }
    }

    return changes.sort((a, b) =>
      a.group.localeCompare(b.group) || a.name.localeCompare(b.name)
    );
  }
}

export interface DepChange {
  name: string;
  fromVersion: string | null;
  toVersion: string | null;
  group: 'dependencies' | 'devDependencies';
}
