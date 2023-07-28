import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaRegionesComponent } from './components/lista-regiones/lista-regiones.component';
import { ListaProvinciasComponent } from './components/lista-provincias/lista-provincias.component';
import { ListaAvesComponent } from './components/lista-aves/lista-aves.component';
import { NavComponent } from './components/nav/nav.component';
import { CargaDetalleAveComponent } from './components/carga-detalle-ave/carga-detalle-ave.component';
import { DetalleListaAveComponent } from './components/detalle-lista-ave/detalle-lista-ave.component';
import { CargaListaAvesComponent } from './components/carga-lista-aves/carga-lista-aves.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaRegionesComponent,
    ListaProvinciasComponent,
    ListaAvesComponent,
    NavComponent,
    CargaDetalleAveComponent,
    DetalleListaAveComponent,
    CargaListaAvesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
