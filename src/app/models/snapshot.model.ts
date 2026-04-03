export interface DepEntry {
  version: string | null;
  supported?: string;
}

export interface SnapshotDeps {
  angular: DepEntry;
  cli: DepEntry;
  node: DepEntry;
  typescript: DepEntry;
  rxjs: DepEntry;
}

export interface VersionEntry {
  angularMajor: number;
  generatedAt: string;
  deps: SnapshotDeps;
}

export interface Snapshot extends VersionEntry {
  files: Record<string, string>;
}

export type FileStatus = 'added' | 'removed' | 'modified' | 'unchanged';

export interface FileDiffEntry {
  status: FileStatus;
  patch: string;
  fromContent: string;
  toContent: string;
}

export type DiffResult = Record<string, FileDiffEntry>;
