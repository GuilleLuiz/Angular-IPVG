import { CarroCompraModule } from './paginas/clase-cinco/componentes/carro-compra/carro-compra.module';
import { ListaProductosModule } from './paginas/clase-cinco/componentes/lista-productos/lista-productos.module';
import { PatronObservadorArregloModule } from './paginas/clase-cinco/componentes/patron-observador-arreglo/patron-observador-arreglo.module';
import { PatronObservadorModule } from './paginas/clase-cinco/componentes/patron-observador/patron-observador.module';
import { DirectivesModule } from './../../directives/directives.module';
import { RutModule } from './../../pipes/rut/rut.module';
import { NavegacionPrincipalModule } from './../../componentes/navegacion-principal/navegacion-principal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModPublicoComponent } from './mod-publico.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { MOD_PUBLICO_ROUTES } from './mod-publico.routing';
import { ClaseCincoComponent } from './paginas/clase-cinco/clase-cinco.component';
import { CarroCompraPaginaComponent } from './paginas/carro-compra-pagina/carro-compra-pagina.component';



@NgModule({
  declarations: [
    ModPublicoComponent,
    InicioComponent,
    ContactoComponent,
    ClaseCincoComponent,
    CarroCompraPaginaComponent,
  ],
  imports: [
    CommonModule,
    NavegacionPrincipalModule,
    RutModule,
    DirectivesModule,
    PatronObservadorModule,
    PatronObservadorArregloModule,
    ListaProductosModule,
    CarroCompraModule,
    RouterModule.forChild(MOD_PUBLICO_ROUTES)
  ]
})
export class ModPublicoModule { }
