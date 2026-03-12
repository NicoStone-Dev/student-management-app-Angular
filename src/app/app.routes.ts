import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./sep/components/courses-listed/courses-listed.component').then(
        (m) => m.CoursesListedComponent,
      );
    },
  },
];
