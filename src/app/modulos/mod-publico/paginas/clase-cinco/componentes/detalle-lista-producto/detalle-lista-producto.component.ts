import { CarroCompraProducto } from './../../../../modelos/carro-compra.interface';
import { CarroService } from './../../../../../../servicios/carro/carro.service';
import { Producto } from './../../../../modelos/producto.interface';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarroCompra } from 'src/app/modulos/mod-publico/modelos/carro-compra.interface';

@Component({
  selector: 'app-detalle-lista-producto',
  templateUrl: './detalle-lista-producto.component.html',
  styleUrls: ['./detalle-lista-producto.component.css']
})
export class DetalleListaProductoComponent implements OnInit, OnDestroy {

  @Input() producto!: Producto;
  
  carroCompraProducto?: CarroCompraProducto;
  carroCompraSubcription$!: Subscription;

  constructor(
    private carroService: CarroService
  ) { }

  ngOnInit(): void {
    this.carroCompraProducto = this.carroService.carro.productos.find(element =>{
      return element.producto.id===this.producto.id
    });
    this.carroCompraSubcription$ = this.carroService.carroCompra$.subscribe(carro => {
      console.log('oyente.detalle.lista.producto.component', carro);
      this.carroCompraProducto = carro.productos.find(element=>{
        return element.producto.id===this.producto.id;
      });
    });
  }
  
  agregarAlCarro() {
    this.carroService.agregarProducto(this.producto);
  }
  
  quitarUnAUnidadDelCarro() {
    console.log('tarea');
    if(this.carroCompraProducto!.cantidad==1){
      this.carroService.eliminarLineaProducto(this.carroCompraProducto!);
    }else{
      this.carroCompraProducto!.cantidad--;
      this.carroService.modificarProducto(this.carroCompraProducto!);
    }
  }
  
  quitarLineaDelCarro() {
    console.log('tarea');
    this.carroService.eliminarLineaProducto(this.carroCompraProducto!);
  }
  
  ngOnDestroy() {
    this.carroCompraSubcription$.unsubscribe();
  }
}
