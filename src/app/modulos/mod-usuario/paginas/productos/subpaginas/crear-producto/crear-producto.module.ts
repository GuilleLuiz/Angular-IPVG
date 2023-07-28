import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearProductoComponent } from './crear-producto.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CrearProductoComponent}
    ])
  ]
})
export class CrearProductoModule { }
