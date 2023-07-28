import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ListaProductosComponent } from './subpaginas/lista-productos/lista-productos.component';
import { RouterModule } from '@angular/router';
import { MOD_USUARIO_PRODUCTO_ROUTES } from './productos.routing';



@NgModule({
  declarations: [
    ProductosComponent,
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MOD_USUARIO_PRODUCTO_ROUTES)
  ]
})
export class ProductosModule { }
