import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CoursesListedComponent } from '../components/courses-listed/courses-listed.component';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CoursesListedComponent, NgFor],
  template: `
    <div id="page-container">
      <router-outlet/>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {

  }

}
