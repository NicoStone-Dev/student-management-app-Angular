import { Component } from '@angular/core';
import { MainLayoutComponent } from './shared/layouts/main/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  template: `
  <div id="app-container">
    <app-main-layout></app-main-layout>
  </div>
  `,
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  title = 'ManaS';
}
