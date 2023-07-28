import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlightColor') color: string = 'blue';

  constructor(private elementRef: ElementRef) {
    console.log('hola');
  }

  ngOnInit() {
    
  }

  @HostListener('mouseenter', ['$event'])
  mouseEnter($event: any) {
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave($event: any) {
    console.log($event);
    this.elementRef.nativeElement.style.backgroundColor = 'white';
  }

}
