import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-user-action',
  imports: [NgIf],
  templateUrl: './confirm-user-action.component.html',
  styleUrl: './confirm-user-action.component.scss'
})
export class ConfirmUserActionComponent {
  @Input() message! : string | null;
   router = inject(Router);

  goToHomePage(){
    this.router.navigate(['/']);
  }
}
