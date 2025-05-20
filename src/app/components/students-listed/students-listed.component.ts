import { Component, inject, OnInit, signal } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { catchError } from 'rxjs';
import { NgFor } from '@angular/common';
import { HoverDirective } from '../../directives/hover.directive';

@Component({
  selector: 'app-students-listed',
  imports: [NgFor, HoverDirective],
  templateUrl: './students-listed.component.html',
  styleUrl: './students-listed.component.scss'
})
export class StudentsListedComponent implements OnInit {
  studentService = inject(StudentService);
  studentList = signal<Array<Student>>([]);

  ngOnInit(): void {
    this.studentService.listStudents()
      .pipe(
        catchError((err) => {
          throw err;
        })
      ).subscribe((data) => {
        this.studentList.set(data);
      })

/*     this.studentService.getAttributedCourse(this.studentList.courseId)
      .pipe(
        catchError((err) => {
            throw err;
        })
        .subscribe((data)=> {
          this.
        })
      ) */
  }
}
