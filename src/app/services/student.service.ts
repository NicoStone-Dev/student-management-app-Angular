import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { Course } from '../models/course';
import { StudentDTO } from '../models/StudentDTO';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiServerURL = environment.apiBaseUrl;
  http = inject(HttpClient);

  //Add, list, find, update and delete methods must be added 

  //List method
  listStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiServerURL}/students/list`);
  }

  getAttributedCourse(courseId : number): Observable<Course>{
    return this.http.get<Course>(`${this.apiServerURL}/search/${courseId}`);
  }

  registerStudent(new_student : StudentDTO): Observable<Object> {
    return this.http.post(`${this.apiServerURL}/students/add`, new_student);
  }
}
