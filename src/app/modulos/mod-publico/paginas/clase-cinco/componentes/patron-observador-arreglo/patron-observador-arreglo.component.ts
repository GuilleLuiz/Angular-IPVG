import { Persona, PersonaConPrimerNombreApellido } from './../../../../modelos/persona.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subject, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-patron-observador-arreglo',
  templateUrl: './patron-observador-arreglo.component.html',
  styleUrls: ['./patron-observador-arreglo.component.css']
})
export class PatronObservadorArregloComponent implements OnInit, OnDestroy {

  arreglo$ = new Subject<Persona[]>();
  subcripcion1$!: Subscription; 
  subcripcion2$!: Subscription; 

  constructor() { }

  ngOnInit(): void {
    this.subcripcion1$ = this.arreglo$.subscribe((personas) => {
      console.log('personas oyente.1', personas);
    });
    this.subcripcion2$ = this.arreglo$.pipe(
      map(personas => {
        return personas.filter(p => p.edad > 18);
      }),
      map<Persona[], PersonaConPrimerNombreApellido[]>(personas => {
        return personas.map(persona => {
          const nombreArr = persona.nombre.split(" ");
          const apellido = nombreArr.length > 1 ? nombreArr[1] : "";
          return {
            edad: persona.edad,
            nombre: persona.nombre,
            primerNombre: nombreArr[0],
            apellido: apellido,
          };
        })
      }),
    ).subscribe((personas) => {
      console.log('personas oyente.2', personas);
    });

    this.arreglo$.next([
      { edad: 18, nombre: 'Juanito Perez' },
      { edad: 20, nombre: 'Anacleto' },
      { edad: 30, nombre: 'John Doe' }
    ]);
  }

  ngOnDestroy() {
    this.subcripcion1$.unsubscribe();
    this.subcripcion2$.unsubscribe();
  }

}
