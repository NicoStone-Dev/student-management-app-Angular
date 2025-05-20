import { Component, signal } from '@angular/core';
import { HoverDirective } from '../../directives/hover.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [HoverDirective, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
