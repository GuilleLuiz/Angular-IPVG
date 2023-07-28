import { Producto } from './../../../../modelos/producto.interface';
import { ProductosService } from './../../../../../../servicios/productos/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];
  loading: boolean = true;

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.loading = true;
    this.productosService.obtenerProductos().subscribe(respuesta => {
      this.productos = respuesta;
      this.loading = false;
      console.log(this.productos);
    });
  }

}
