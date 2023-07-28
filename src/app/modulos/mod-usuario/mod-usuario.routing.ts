import { GuardUserGuard } from './../../guards/guard-user/guard-user.guard';
import { ModUsuarioComponent } from './mod-usuario.component';
import { Route } from "@angular/router";
import { InicioComponent } from './paginas/inicio/inicio.component';

export const MOD_USUARIO_ROUTES: Route[] = [
  {
    path: '',
    component: ModUsuarioComponent,
    canActivate: [GuardUserGuard],
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'lista-usuario',
        loadChildren: () => import('./paginas/lista-usuario/lista-usuario.module').then(m => m.ListaUsuarioModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./paginas/productos/productos.module').then(m => m.ProductosModule)
      }
    ]
  }
]