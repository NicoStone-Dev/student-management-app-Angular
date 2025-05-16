import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiServerURL = environment.apiBaseUrl;
  http = inject(HttpClient);

  //Add, list, find, update and delete methods must be added 

  //List method
  public listStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiServerURL}/students/list`)
  }
}
