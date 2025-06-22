import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  private el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.style.backgroundColor = 'green'
   }

}
