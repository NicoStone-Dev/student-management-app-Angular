import { Component, inject, WritableSignal, signal } from '@angular/core';
import { HoverDirective } from '../directives/hover.directive';
import { StudentService } from '../services/student.service';
import { StudentDTO } from '../models/StudentDTO';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-student-register',
  imports: [HoverDirective],
  templateUrl: './student-register.component.html',
  styleUrl: './student-register.component.scss'
})
export class StudentRegisterComponent {
  studentService = inject(StudentService);
  new_student : WritableSignal<StudentDTO> = signal({
    name: '',
    email: '',
    dateOfBirth: '',
    grade_year: '',
    attributedCourse: null
  })

  updateName(event : Event){
    const inputContent = event.target as HTMLInputElement;

    this.new_student.update(current_student => ({
      ...current_student,
      name : inputContent.value
    }));
  }

  updateEmail(event : Event) {
    const inputContent = event.target as HTMLInputElement;

    this.new_student.update(current_student => ({
      ...current_student,
      email : inputContent.value
    }))
  }

  updateDateOfBirth(event : Event){
    const inputContent = event.target as HTMLInputElement;
    
    this.new_student.update(current_student => ({
      ...current_student,
      dateOfBirth: inputContent.value
    }))
  }

  updateGradeYear(event: Event){
    const inputContent = event.target as HTMLInputElement;

    this.new_student.update(current_student => ({
      ...current_student,
      grade_year : inputContent.value
    }))
  }



  onRegister(){
    const new_student : StudentDTO = this.new_student();

    this.studentService.registerStudent(new_student)
    .pipe(
      catchError((err) => {
        throw err;
      })
    ).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
