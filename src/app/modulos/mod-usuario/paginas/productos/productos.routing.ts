import { Route } from "@angular/router";
import { ListaProductosComponent } from "./subpaginas/lista-productos/lista-productos.component";

export const MOD_USUARIO_PRODUCTO_ROUTES: Route[] = [
  {
    path: 'lista',
    component: ListaProductosComponent
  },
  {
    path: 'crear',
    loadChildren: () => import('./subpaginas/crear-producto/crear-producto.module').then(m => m.CrearProductoModule)
  }
]