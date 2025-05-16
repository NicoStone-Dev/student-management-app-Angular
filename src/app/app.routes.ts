import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'courses',
        loadComponent: () => {
            return import("./components/courses-listed/courses-listed.component").then(
                m => m.CoursesListedComponent
            )
        }
    }
];
