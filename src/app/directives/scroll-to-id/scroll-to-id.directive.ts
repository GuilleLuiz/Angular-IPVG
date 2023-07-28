import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollToId]'
})
export class ScrollToIdDirective {

  @Input('appScrollId') id!: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('click', ['$event.target'])
  clickEvent($event: any) {
    console.log($event);
    const elements = document.querySelectorAll(`[id="${this.id}"]`);
    console.log(elements);
    if (elements.length > 0) {
      elements[0].scrollIntoView({block: "start", behavior: "smooth"});
    }
  }

}
