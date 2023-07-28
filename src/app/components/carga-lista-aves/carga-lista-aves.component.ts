import { Component, EventEmitter, Input, OnInit, ViewChild,Output } from '@angular/core';
import { CargaDetalleAveComponent } from '../carga-detalle-ave/carga-detalle-ave.component';
import { Ave } from './../lista-aves/interfaces/lista-ave.interface';

@Component({
  selector: 'app-carga-lista-aves',
  templateUrl: './carga-lista-aves.component.html',
  styleUrls: ['./carga-lista-aves.component.css']
})
export class CargaListaAvesComponent implements OnInit {

  cargandoAves: boolean = false;
  @Input() avesFiltradas: Ave[] = [];
  @Output() aveClickeada = new EventEmitter<Ave>();
  
 @ViewChild('cargaDetalleAve', { static: false })
  cargaDetalleAveComponent!: CargaDetalleAveComponent;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarListaAves(avesFiltradas: Ave[]): void {
    this.avesFiltradas=avesFiltradas;
    this.cargaDetalleAveComponent.recargar()
  }

  asignarAveClickeada(ave: Ave) {
    console.log(ave);
    this.aveClickeada.emit(ave);
  }
}
