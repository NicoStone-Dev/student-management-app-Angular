import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  el = inject(ElementRef);
  renderer = inject(Renderer2);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      'transparent'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'opacity 0.4s'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'opacity',
      '0.6'
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      'transparent'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'opacity',
      '1'
    );
  }

}
