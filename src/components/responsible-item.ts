import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[responsible]'
})
export class ResponsibleItem {

  constructor(public el: ElementRef, public renderer: Renderer) { }

  @HostListener('touchstart') onMouseEnter() {
    this.highlight('#F5F5F5');
  }
  @HostListener('touchend') onMouseLeave() {
    this.highlight('#FFFFFF');
  }

  public highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
