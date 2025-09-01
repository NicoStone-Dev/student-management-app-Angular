import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header/><!-- 
    <app-delete-confirmation/> -->
    <main>
      <router-outlet/>
    </main>
  `,
  styleUrl:'app.component.scss'
})
export class AppComponent {
  title = 'ManaS';
}
