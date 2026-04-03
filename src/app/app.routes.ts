import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'diff', pathMatch: 'full' },
  {
    path: 'diff',
    loadComponent: () => import('./diff-view/diff-view').then(m => m.DiffViewComponent),
  },
  {
    path: 'diff/:from/:to',
    loadComponent: () => import('./diff-view/diff-view').then(m => m.DiffViewComponent),
  },
  {
    path: 'diff/:from/:to/:file',
    loadComponent: () => import('./diff-view/diff-view').then(m => m.DiffViewComponent),
  },
  {
    path: 'browse/:version',
    loadComponent: () => import('./browse-view/browse-view').then(m => m.BrowseViewComponent),
  },
  { path: '**', redirectTo: 'diff' },
];
