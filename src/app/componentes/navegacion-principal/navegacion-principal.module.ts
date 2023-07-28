import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionPrincipalComponent } from './navegacion-principal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavegacionPrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavegacionPrincipalComponent
  ]
})
export class NavegacionPrincipalModule { }
