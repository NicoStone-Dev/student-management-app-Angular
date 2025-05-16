import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, HomeComponent],
  template: `
    <app-header/>
    <main>
        <app-sidebar/>
      <app-home/>
    </main>
  `,
  styleUrl:'app.component.scss'
})
export class AppComponent {
  title = 'ManaS';
}
