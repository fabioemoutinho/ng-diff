export interface PackageMeta {
  angularVersion: string | null;
  cliVersion: string | null;
  typescriptVersion: string | null;
  rxjsVersion: string | null;
}

export interface VersionEntry {
  angularMajor: number;
  cliVersion: string;
  nodeVersion: number;
  nodeVersionUsed: string | null;
  nodeRange: string;
  tsRange: string;
  rxjsRange: string;
  generatedAt: string;
  packageMeta: PackageMeta;
}

export interface Snapshot {
  angularMajor: number;
  cliVersion: string;
  nodeVersion: number;
  nodeVersionUsed?: string;
  nodeRange?: string;
  tsRange?: string;
  rxjsRange?: string;
  generatedAt: string;
  packageMeta: PackageMeta;
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
