import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiServerURL = environment.apiBaseUrl;
  http = inject(HttpClient);
  
  //Add, list, find, update and delete methods must be added 

  //List method
  listCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiServerURL}/courses/list`);
  }
}
