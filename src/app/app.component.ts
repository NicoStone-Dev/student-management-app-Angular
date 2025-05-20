import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent],
  template: `
    <app-header/>
    <main>
      <app-home/>
    </main>
  `,
  styleUrl:'app.component.scss'
})
export class AppComponent {
  title = 'ManaS';
}
