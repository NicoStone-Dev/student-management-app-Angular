import { Component } from '@angular/core';
import { HeaderComponent } from './sep/components/header/header.component';
import { HomeComponent } from './sep/home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header /><!-- 
    <app-delete-confirmation/> -->
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  title = 'ManaS';
}
