import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCarroComponent } from './lista-carro.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaCarroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ListaCarroComponent }
    ])
  ]
})
export class ListaCarroModule { }
