import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CoursesListedComponent } from '../components/courses-listed/courses-listed.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CoursesListedComponent],
  template: `
    <div id="page-container">
      <app-courses-listed/>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
