import { DirectivesModule } from './../../../../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: InicioSesionComponent }
    ])
  ]
})
export class InicioSesionModule { }
