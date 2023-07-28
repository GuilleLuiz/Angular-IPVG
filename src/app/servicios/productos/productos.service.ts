import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Producto } from './../../modulos/mod-publico/modelos/producto.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(environment.apiStore + 'products');
  }
}
