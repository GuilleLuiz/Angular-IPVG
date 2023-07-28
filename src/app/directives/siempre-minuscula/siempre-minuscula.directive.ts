import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[siempreMinuscula]'
})
export class SiempreMinusculaDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:keyup', ['$event'])
  keyUp($event: any) {
    console.log('key.up', $event.key, $event.target.value);
    const sAnterior = $event.target.value;
    const sNuevo = sAnterior.toLowerCase();
    this.elementRef.nativeElement.value = sNuevo;
  }

}
