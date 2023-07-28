import { CarroCompraPaginaComponent } from './paginas/carro-compra-pagina/carro-compra-pagina.component';
import { ClaseCincoComponent } from './paginas/clase-cinco/clase-cinco.component';
import { ModPublicoComponent } from './mod-publico.component';

import { Route } from "@angular/router";
import { ContactoComponent } from "./paginas/contacto/contacto.component";
import { InicioComponent } from "./paginas/inicio/inicio.component";

export const MOD_PUBLICO_ROUTES: Route[] = [
  {
    path: '',
    component: ModPublicoComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: 'clase-5',
        component: ClaseCincoComponent
      },
      {
        path: 'carro-compra',
        component: CarroCompraPaginaComponent
      },
      {
        path: 'inicio-sesion',
        loadChildren: () => import('./paginas/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionModule)
      },
      {
        path: '404',
        loadChildren: () => import('./paginas/error-not-found/error-not-found.module').then(m => m.ErrorNotFoundModule)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'inicio'
      }
    ]
  }
]