import { NavegacionClienteModule } from './../../componentes/navegacion-cliente/navegacion-cliente.module';
import { MOD_CLIENTE_ROUTES } from './mod-cliente.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModClienteComponent } from './mod-cliente.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ModClienteComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    NavegacionClienteModule,
    RouterModule.forChild(MOD_CLIENTE_ROUTES)
  ]
})
export class ModClienteModule { }
