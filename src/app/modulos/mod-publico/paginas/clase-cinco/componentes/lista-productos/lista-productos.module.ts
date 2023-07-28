import { DetalleListaProductoModule } from './../detalle-lista-producto/detalle-lista-producto.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos.component';



@NgModule({
  declarations: [
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    DetalleListaProductoModule
  ],
  exports: [
    ListaProductosComponent
  ]
})
export class ListaProductosModule { }
