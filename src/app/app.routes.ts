import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'courses',
        loadComponent: () => {
            return import("./components/courses-listed/courses-listed.component").then(
                m => m.CoursesListedComponent
            )
        }
    },
    {
        path: 'students',
        loadComponent: () => {
            return import('./components/students-listed/students-listed.component').then(
                m => m.StudentsListedComponent
            )
        }
    },
    {
        path: 'register_student',
        loadComponent: () => {
            return import('./components/student-register/student-register.component').then(
                m => m.StudentRegisterComponent
            )
        }
    }
];
