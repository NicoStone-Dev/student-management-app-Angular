import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { Student } from '../models/student';
import { CourseDTO } from '../models/CourseDTO';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiServerURL = environment.apiBaseUrl;
  http = inject(HttpClient);

  //Add, list, find, update and delete methods must be added 

  //List method
  listCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiServerURL}/courses`);
  }
  //Add method
  addCourse(new_course: CourseDTO): Observable<Object> {
    return this.http.post(`${this.apiServerURL}/courses/add`, new_course)
  }

  showClass(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerURL}/courses/${courseId}/show/students`);
  }

  deleteCourse(courseId: number): Observable<Object> {
    return this.http.delete(`${this.apiServerURL}/courses/delete/${courseId}`);
  }

  findCourse(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiServerURL}/courses/search/${courseId}`);
  }

  joinClass(courseId: number, studentId: number) {
    return this.http.put(`${this.apiServerURL}/courses/join/${courseId}/${studentId}`, {});
  }
}
