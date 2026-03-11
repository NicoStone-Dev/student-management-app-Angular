import { Component, inject, OnInit, signal } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { catchError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-listed',
  imports: [NgFor, RouterLink],
  templateUrl: './courses-listed.component.html',
  styleUrl: './courses-listed.component.scss'
})
export class CoursesListedComponent implements OnInit {
  courseService = inject(CourseService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  courseList = signal<Array<Course>>([]);
  isLoading = signal(false);

  ngOnInit(): void {
    this.courseService.listCourses()
      .pipe(
        catchError((err) => {
          console.log("Error fetching course list ", err)
          throw err;
        })
      )
      .subscribe((data) => {
        this.courseList.set((data));
      }

      )
  }

  onDelete(courseId: number) {
    this.isLoading.set(true);

    const isConfirmed = confirm("Are you sure you want to delete this course?");

    if (isConfirmed) {
      this.courseService.deleteCourse(courseId).subscribe({
        next: () => {
          alert("Course has been removed!")
          this.isLoading.set(false);
          this.router.navigate([`/courses`]);
        },
        error: (error) => {
          alert('Delete operation failed');
          this.isLoading.set(false);
          console.log(error);
        }
      });
    } else {
      this.isLoading.set(false);
    }
  }
}
