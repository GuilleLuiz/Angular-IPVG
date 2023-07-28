import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionClienteComponent } from './navegacion-cliente.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavegacionClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavegacionClienteComponent
  ]
})
export class NavegacionClienteModule { }
