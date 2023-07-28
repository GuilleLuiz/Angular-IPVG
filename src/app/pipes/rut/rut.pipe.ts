import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rut' // variable | rut
})
export class RutPipe implements PipeTransform {

  transform(rut: string, formato: 'punto-guion' | 'solo-guion' | 'ninguno' = 'punto-guion'): string {
    const rutSinPuntosNiGuion = rut.replace(/[\.|-]+/g, '');
    if (rutSinPuntosNiGuion.length > 0) {
      const ultimoDigito = rutSinPuntosNiGuion.substring(rutSinPuntosNiGuion.length - 1);
      const sinUltimoDigito = rutSinPuntosNiGuion.substring(0, rutSinPuntosNiGuion.length - 1);
      
      if (rutSinPuntosNiGuion.length === 1) {
        return ultimoDigito;
      }
      if (formato === 'punto-guion') {
        const sinUltimoDigitoTransformado = (new DecimalPipe('es-CL')).transform(sinUltimoDigito, '1.0-0');
        return sinUltimoDigitoTransformado + '-' + ultimoDigito;
      } else if (formato === 'solo-guion') {
        return sinUltimoDigito + '-' + ultimoDigito;
      } else if (formato === 'ninguno') {
        return sinUltimoDigito + ultimoDigito;
      } else {
        return '';
      }

    } else {
      return '';
    }
  }

}
