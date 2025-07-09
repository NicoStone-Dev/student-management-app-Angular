import { Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { catchError } from 'rxjs';
import { NgFor } from '@angular/common';
import { HoverDirective } from '../../directives/hover.directive';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-students-listed',
  imports: [NgFor, RouterLink],
  templateUrl: './students-listed.component.html',
  styleUrl: './students-listed.component.scss'
})
export class StudentsListedComponent implements OnInit {
  //Checks if data is still being loaded and treated from the DB
  isLoading = signal(false);

  studentService = inject(StudentService);
  courseService = inject(CourseService);
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

  courseAttributedByName : string = "";

  private route = inject(ActivatedRoute);


  ngOnInit(): void {
    //marking the start of data loading
    this.isLoading.set(true)

    //Clearing any previous student
    this.studentList.set([])
    // Defining id that is passed through the url:
    const courseIdFromRoute = this.route.snapshot.paramMap.get('id');
    
    if (courseIdFromRoute != null) {
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
}
