import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { DeleteConfirmationComponent } from "./components/delete-confirmation/delete-confirmation.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, DeleteConfirmationComponent],
  template: `
    <app-header/><!-- 
    <app-delete-confirmation/> -->
    <main>
      <app-home/>
    </main>
  `,
  styleUrl:'app.component.scss'
})
export class AppComponent {
  title = 'ManaS';
}
