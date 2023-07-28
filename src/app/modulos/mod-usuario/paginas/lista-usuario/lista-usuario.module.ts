import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './lista-usuario.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ListaUsuarioComponent}
    ])
  ]
})
export class ListaUsuarioModule { }
