import { Component, inject, OnInit, signal } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { catchError } from 'rxjs';
import { NgFor } from '@angular/common';
import { HoverDirective } from '../../directives/hover.directive';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-listed',
  imports: [NgFor, RouterLink, HoverDirective],
  templateUrl: './students-listed.component.html',
  styleUrl: './students-listed.component.scss'
})
export class StudentsListedComponent implements OnInit {
  //Checks if data is still being loaded and treated from the DB
  isLoading = signal(false);

  studentService = inject(StudentService);
  courseService = inject(CourseService);
  router = inject(Router);

  studentList = signal<Array<Student>>([]);
  courseAttributed = signal({
    id: 0,
    name: "null",
    hoursToFinish: 0,
    mainTeacherName: "",
    mainTeacherEmail: "",
    course_code: "",
    studentList: []
  });

  courseAttributedByName: string = "";

  private route = inject(ActivatedRoute);


  ngOnInit(): void {
    //marking the start of data loading
    this.isLoading.set(true)

    //Clearing any previous student
    this.studentList.set([])
    // Defining id that is passed through the url:
    const courseIdFromRoute = this.route.snapshot.paramMap.get('id');

    if (courseIdFromRoute) {
      // Then we change it to number type
      const numericCourseId = +courseIdFromRoute;
      // At last we treat the data
      this.courseService.showClass(numericCourseId)
        .pipe(
          catchError((err) => {
            console.error('Error fetching students.', err);
            throw err
          }
          )).subscribe((data) => {
            this.studentList.set(data)
            //marking the end of data loading
            this.isLoading.set(false)
          })
    }
  }

  onDelete(studentId: number) {
    this.isLoading.set(true);

    const isConfirmed = confirm("Are you sure you want to delete this student from it's course?")
    const courseIdFromRoute = this.route.snapshot.paramMap.get('id');

    if (!courseIdFromRoute || isNaN(+courseIdFromRoute)) {
      alert('Invalid course');
      this.isLoading.set(false);
      return;
    }
    const numericCourseId = +courseIdFromRoute;

    if (isConfirmed) {
      alert("Student has been removed!")
      this.studentService.deleteStudent(studentId).subscribe({
        next: () => {
          this.router.navigate([`course/${numericCourseId}/students`]);
          this.isLoading.set(false);
        },
        error: (error) => {
          alert('Delete operation failed');
          this.isLoading.set(false);
          throw error;
        }
      }); 
    }
    this.isLoading.set(false);
    this.router.navigate(['/']);
  }
}
