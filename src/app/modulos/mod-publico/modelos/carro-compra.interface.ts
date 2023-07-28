import { Producto } from './producto.interface';

export interface CarroCompra {
  productos: CarroCompraProducto[];
  cantidadTotal: number;
  total: number;
}

export interface CarroCompraProducto {
  producto: Producto;
  cantidad: number;
}