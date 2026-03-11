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
  {
    path: 'courses',
    loadComponent: () => {
      return import('./sep/components/courses-listed/courses-listed.component').then(
        (m) => m.CoursesListedComponent,
      );
    },
  },
  {
    path: 'course/:id/students',
    loadComponent: () => {
      return import('./sep/components/students-listed/students-listed.component').then(
        (m) => m.StudentsListedComponent,
      );
    },
  },
  {
    path: 'register/student',
    loadComponent: () => {
      return import('./student-register/student-register.component').then(
        (m) => m.StudentRegisterComponent,
      );
    },
  },
  {
    path: 'submit/course',
    loadComponent: () => {
      return import('./course-submit/course-submit.component').then(
        (m) => m.CourseSubmitComponent,
      );
    },
  },
  {
    path: 'edit/student',
    loadComponent: () => {
      return import('./sep/student-edit/student-edit.component').then(
        (m) => m.StudentEditComponent,
      );
    },
  },
  {
    path: 'edit/course',
    loadComponent: () => {
      return import('./sep/course-edit/course-edit.component').then(
        (m) => m.CourseEditComponent,
      );
    },
  },
  {
    path: 'delete/course/:id',
    loadComponent: () => {
      return import('./sep/components/delete-confirmation/delete-confirmation.component').then(
        (m) => m.DeleteConfirmationComponent,
      );
    },
  },
  {
    path: 'register/student/course/selection',
    loadComponent: () => {
      return import('./sep/components/course-picking/course-picking.component').then(
        (m) => m.CoursePickingComponent,
      );
    },
  },
];
