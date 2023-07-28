import { RutPipe } from './../../pipes/rut/rut.pipe';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[rutMask]'
})
export class RutMaskDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:keyup', ['$event'])
  keyUp($event: any) {
    console.log('key.up', $event.key, $event.target.value);
    const rutAnterior = $event.target.value;
    const rutNuevo = (new RutPipe()).transform(rutAnterior, 'punto-guion');
    console.log('rutNuevo', rutNuevo);
    this.elementRef.nativeElement.value = rutNuevo;
  }

}
