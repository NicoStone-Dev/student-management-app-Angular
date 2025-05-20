import { Component, inject, OnInit, signal } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { catchError } from 'rxjs';
import { NgFor } from '@angular/common';
import { HoverDirective } from '../../directives/hover.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses-listed',
  imports: [NgFor, HoverDirective, RouterLink],
  templateUrl: './courses-listed.component.html',
  styleUrl: './courses-listed.component.scss'
})
export class CoursesListedComponent implements OnInit {
  courseService = inject(CourseService);
  courseList = signal<Array<Course>>([]);


  ngOnInit(): void {
    this.courseService.listCourses()
    .pipe(
      catchError((err) => {
        throw err;
      })
    )
    .subscribe((data) => {
      this.courseList.set((data));
    }

    )
  }
}
