import { ContactoComponent } from './paginas/contacto/contacto.component';
import { Route } from "@angular/router";
import { InicioComponent } from "./paginas/inicio/inicio.component";

export const APP_ROUTES: Route[] = [
  // {
  //   path: 'inicio',
  //   component: InicioComponent
  // },
  // {
  //   path: 'contacto',
  //   component: ContactoComponent
  // },
  {
    path: 'modulo-cliente',
    loadChildren: () => import('./modulos/mod-cliente/mod-cliente.module').then(m => m.ModClienteModule)
  },
  {
    path: 'modulo-usuario',
    loadChildren: () => import('./modulos/mod-usuario/mod-usuario.module').then(m => m.ModUsuarioModule)
  },
  {
    path: '',
    loadChildren: () => import('./modulos/mod-publico/mod-publico.module').then(m => m.ModPublicoModule)
  }
]