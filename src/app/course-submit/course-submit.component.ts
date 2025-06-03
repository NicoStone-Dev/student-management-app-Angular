import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CourseDTO } from '../models/CourseDTO';
import { catchError } from 'rxjs';
import { HoverDirective } from '../directives/hover.directive';

@Component({
  selector: 'app-course-submit',
  imports: [HoverDirective],
  templateUrl: './course-submit.component.html',
  styleUrl: './course-submit.component.scss'
})
export class CourseSubmitComponent {
  courseService = inject(CourseService);
  new_course: WritableSignal<CourseDTO> = signal({
    name: "",
    hoursToFinish: 0,
    mainTeacherName: "",
    mainTeacherEmail: ""
  });

  updateCourseName(event: Event): void {
    //Here we just grabbing any input from the user and addressing it to this const;
    const inputContent = event.target as HTMLInputElement;

    //This calls the update method in from the signal class
    this.new_course.update(currentCourse => ({
      //These reticenses actually spread out the info in the variable passed in (which is an instance of courseDTO), by then we just update the name value 
      ...currentCourse,
      name: inputContent.value
    }));
  }

  updateTeacherName(event: Event): void {
    const inputContent = event.target as HTMLInputElement;

    this.new_course.update(currentCourse => ({
      ...currentCourse,
      mainTeacherName: inputContent.value
    }));
  }

  updateTeacherEmail(event: Event): void {
    const inputContent = event.target as HTMLInputElement;

    this.new_course.update(currentCourse => ({
      ...currentCourse,
      mainTeacherEmail: inputContent.value
    }));
  }

  updateHoursToFinish(event: Event): void {
    const inputContent = event.target as HTMLInputElement;

    //Here parseInt converts a string to an integer (only difference to all the other methods)
    const inputContentAsaNumber = parseInt(inputContent.value, 10);

    this.new_course.update(currentCourse => ({
      ...currentCourse,
      hoursToFinish: inputContentAsaNumber
    }))

  }

  onSubmit() {
    const course_to_be: CourseDTO = this.new_course();

    this.courseService.addCourse(course_to_be)
      .pipe(
        catchError((err) => {
          throw err;
        } 
        )
      ).subscribe(
        data => {
          console.log(data)
        }
      )
  }
}
