import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { NgFor, NgIf } from '@angular/common';
import { catchError } from 'rxjs';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-course-picking',
  imports: [NgFor, RouterLink],
  templateUrl: './course-picking.component.html',
  styleUrl: './course-picking.component.scss'
})
export class CoursePickingComponent implements OnInit {
  courseService = inject(CourseService);
  course_list = signal<Array<Course>>([]);
  @Input() studentId!: number | null;
  courseId: number | null = null;

  courseChosen = signal(false);

  ngOnInit(): void {
    this.courseService.listCourses()
      .pipe(
        catchError((err) => {
          console.log("Error fetching course list ", err)
          throw err;
        })
      )
      .subscribe((data) => {
        this.course_list.set(data);
      })
  }

  chosenCourse(event: Event) {
    const inputContent = event.target as HTMLInputElement;

    const course_id_chosen = parseInt(inputContent.value, 10);

    if (course_id_chosen != null) {
      this.courseId = course_id_chosen;
    }
  }

  onJoin() {
    if (this.courseId != null && this.studentId != null) {
      this.courseService.joinClass(this.courseId, this.studentId)
      .subscribe({
        next: () => {
          console.log(`Student of id: ${this.studentId} successfully joined course of id: ${this.courseId}`);
        },
        error: (err) => {
          console.log("Student failed to join class ", err);
        }
      })
    }
  }
}
