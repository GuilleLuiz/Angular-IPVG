import { NavegacionUsuarioModule } from './../../componentes/navegacion-usuario/navegacion-usuario.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModUsuarioComponent } from './mod-usuario.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { MOD_USUARIO_ROUTES } from './mod-usuario.routing';



@NgModule({
  declarations: [
    ModUsuarioComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    NavegacionUsuarioModule,
    RouterModule.forChild(MOD_USUARIO_ROUTES)
  ]
})
export class ModUsuarioModule { }
