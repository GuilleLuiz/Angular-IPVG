import { RutPipe } from './../../../../pipes/rut/rut.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ahora = new Date();
  numero = 688128313;
  usuario = {
    nombre: 'john',
    apellido: 'doe',
    direcciones: [
      { calle: 'av siempre viva', numero: 742 }
    ]
  } 

  elRut = '12456789-0';
  miRutTransformado!: string;

  constructor() { }

  ngOnInit(): void {
    this.miRutTransformado = (new RutPipe()).transform(this.elRut, 'punto-guion');
  }

}
