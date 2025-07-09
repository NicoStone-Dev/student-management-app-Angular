import { Component, WritableSignal, inject, signal } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CourseDTO } from '../models/CourseDTO';
import { catchError } from 'rxjs';
import { HoverDirective } from '../directives/hover.directive';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-course-submit',
  imports: [HoverDirective, NgIf, RouterLink],
  templateUrl: './course-submit.component.html',
  styleUrl: './course-submit.component.scss'
})
export class CourseSubmitComponent {
  onLoading = signal(false);
  courseService = inject(CourseService);
  new_course: WritableSignal<CourseDTO> = signal({
    name: "",
    hoursToFinish: 0,
    mainTeacherName: "",
    mainTeacherEmail: ""
  });
  insuficientInfo = signal(false);
  course_submited = signal(false);

  updateCourseName(event: Event): void {
    //Here we just grabbing any input from the user and addressing it to this const;
    const inputContent = event.target as HTMLInputElement;

    if (inputContent.value.length > 5) {
      this.insuficientInfo.set(false);
      //This calls the update method in from the signal class
      this.new_course.update(currentCourse => ({
        //These reticenses actually spread out the info in the variable passed in (which is an instance of courseDTO), by then we just update the name value 
        ...currentCourse,
        name: inputContent.value
      }));
    } else {
      this.insuficientInfo.set(true);
    }
  }

  updateTeacherName(event: Event): void {
    const inputContent = event.target as HTMLInputElement;

    if (inputContent.value.length > 5) {
      this.insuficientInfo.set(false);
      this.new_course.update(currentCourse => ({
        ...currentCourse,
        mainTeacherName: inputContent.value
      }));
    } else {
      this.insuficientInfo.set(true);
    }
  }

  updateTeacherEmail(event: Event): void {
    const inputContent = event.target as HTMLInputElement;

    if (inputContent.value.length > 5) {
      this.insuficientInfo.set(false);
      this.new_course.update(currentCourse => ({
        ...currentCourse,
        mainTeacherEmail: inputContent.value
      }));
    } else {
      this.insuficientInfo.set(true);
    }
  }

  updateHoursToFinish(event: Event): void {
    const inputContent = event.target as HTMLInputElement;

    //Here parseInt converts a string to an integer (only difference to all the other methods)
    const inputContentAsaNumber = parseInt(inputContent.value, 10);

    if(inputContentAsaNumber > 0){
      this.insuficientInfo.set(false);
      this.new_course.update(currentCourse => ({
        ...currentCourse,
        hoursToFinish: inputContentAsaNumber
      }))
    } else {
      this.insuficientInfo.set(true);
    }
  }

  checkForValidation(): boolean {
    const current_course = this.new_course();

    if (current_course.name && current_course.mainTeacherEmail && current_course.mainTeacherName && current_course.hoursToFinish) {
      return true;
    }
    else {
      return false;
    }
  }

  onSubmit() {
    this.onLoading.set(true);

    const course_to_be: CourseDTO = this.new_course();

    if (!this.checkForValidation()) {
      this.insuficientInfo.set(true);
      this.onLoading.set(false);

      return;
    }

    this.courseService.addCourse(course_to_be)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.course_submited.set(true);
          this.onLoading.set(false);
        },
        error: (err) => {
          console.log("Submission failed: ", err);
          this.onLoading.set(false);
        }
      })
  }
}
