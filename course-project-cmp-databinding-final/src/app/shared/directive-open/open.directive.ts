import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[openDirective]'
})
export class OpenDirective{
  @HostListener('click') click(eventData: Event){
    if (this.elementRef.nativeElement.classList.contains('open')){
      this.renderer.removeClass(this.elementRef.nativeElement, "open");
    }
    else{
      this.renderer.addClass(this.elementRef.nativeElement, "open");
    }
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }
}
