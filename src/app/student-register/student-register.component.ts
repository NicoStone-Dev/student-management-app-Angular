import { Component, inject, WritableSignal, signal } from '@angular/core';
import { HoverDirective } from '../directives/hover.directive';
import { StudentService } from '../services/student.service';

import { StudentDTO } from '../models/StudentDTO';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { CoursePickingComponent } from '../components/course-picking/course-picking.component';

@Component({
  selector: 'app-student-register',
  imports: [HoverDirective, CoursePickingComponent, NgIf],
  templateUrl: './student-register.component.html',
  styleUrl: './student-register.component.scss'
})
export class StudentRegisterComponent {
  onLoading = signal(false);
  insuficientInfo = signal(false);
  studentService = inject(StudentService);
  new_student: WritableSignal<StudentDTO> = signal({
    name: '',
    email: '',
    dateOfBirth: '',
    grade_year: '',
    attributedCourse: null
  })

  student_registered = signal(false);
  student_registered_id: number | null = null;


  updateName(event: Event) {
    const inputContent = event.target as HTMLInputElement;

    if (inputContent.value.length > 5) {
      this.insuficientInfo.set(false);

      this.new_student.update(current_student => ({
        ...current_student,
        name: inputContent.value
      }));
    }
    else {
      this.insuficientInfo.set(true);
    }

  }

  updateEmail(event: Event) {
    const inputContent = event.target as HTMLInputElement;

    if (inputContent.value.length > 5) {
      this.insuficientInfo.set(false);
      this.new_student.update(current_student => ({
        ...current_student,
        email: inputContent.value
      }))
    }
    else {
      this.insuficientInfo.set(true);
    }
  }

  updateDateOfBirth(event: Event) {
    const inputContent = event.target as HTMLInputElement;

    if (inputContent.value) {
      this.insuficientInfo.set(false);
      this.new_student.update(current_student => ({
        ...current_student,
        dateOfBirth: inputContent.value
      }))
    }
    else {
      this.insuficientInfo.set(true);
    }
  }

  updateGradeYear(event: Event) {
    const inputContent = event.target as HTMLInputElement;

    if (inputContent.value) {
      this.insuficientInfo.set(false);
      this.new_student.update(current_student => ({
        ...current_student,
        grade_year: inputContent.value
      }))
    }
    else {
      this.insuficientInfo.set(true);
    }
  }

  checkForValidation(): boolean {
    const current_student = this.new_student();

    if (current_student.name && current_student.email && current_student.dateOfBirth && current_student.grade_year) {
      return true;
    }
    else {
      return false;
    }
  }

  onRegister() {
    //Starts loading
    this.onLoading.set(true);

    if (!this.checkForValidation()) {
      //If info not present then we just stop the method and don't return anything
      this.insuficientInfo.set(true);
      this.onLoading.set(false);
      
      return;
    }

    //Here we just do the register request and subscription
    this.studentService.registerStudent(this.new_student())
      .subscribe({
        //Note that the next: is used, this portion of the code only runs if the http request is succesful
        next: (student_added) => {
          console.log(student_added);
          this.student_registered_id = student_added.id;

          this.student_registered.set(true);
          this.onLoading.set(false);
        },
        //If not successful then an error is thrown
        error: (err) => {
          console.error("Registration failed: ", err);
          this.onLoading.set(false);
        }
      }
      )
  }
}