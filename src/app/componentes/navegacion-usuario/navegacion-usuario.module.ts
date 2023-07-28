import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionUsuarioComponent } from './navegacion-usuario.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    NavegacionUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule
  ],
  exports: [
    NavegacionUsuarioComponent
  ]
})
export class NavegacionUsuarioModule { }
