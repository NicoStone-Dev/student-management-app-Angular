import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-user-action',
  imports: [NgIf],
  templateUrl: './confirm-user-action.component.html',
  styleUrl: './confirm-user-action.component.scss'
})
export class ConfirmUserActionComponent {
  @Input() message! : string | null;
}
