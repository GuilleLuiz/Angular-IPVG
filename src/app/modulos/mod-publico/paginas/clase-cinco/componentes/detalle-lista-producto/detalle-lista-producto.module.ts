import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleListaProductoComponent } from './detalle-lista-producto.component';



@NgModule({
  declarations: [
    DetalleListaProductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DetalleListaProductoComponent
  ]
})
export class DetalleListaProductoModule { }
