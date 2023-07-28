import { Ave } from './../lista-aves/interfaces/lista-ave.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-lista-ave',
  templateUrl: './detalle-lista-ave.component.html',
  styleUrls: ['./detalle-lista-ave.component.css']
})
export class DetalleListaAveComponent implements OnInit {

  @Input('detalle') ave!: Ave;
  @Input() otraVariable: boolean = false;

  miHtml: string = '<h5>Hola Mundo</h5>';

  @Output() detalleClickeado = new EventEmitter<Ave>();

  constructor() { }

  ngOnInit(): void {
  }

  verDetalle() {
    console.log('ver detalle');
    this.detalleClickeado.emit(this.ave);
  }

}