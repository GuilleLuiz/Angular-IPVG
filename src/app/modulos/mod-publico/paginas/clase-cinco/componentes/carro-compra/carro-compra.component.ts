import { CarroCompra, CarroCompraProducto } from './../../../../modelos/carro-compra.interface';
import { CarroService } from './../../../../../../servicios/carro/carro.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.component.html',
  styleUrls: ['./carro-compra.component.css']
})
export class CarroCompraComponent implements OnInit, OnDestroy {

  carroCompra!: CarroCompra;
  carroCompraSubcription$!: Subscription;

  constructor(
    private carroService: CarroService
  ) { }

  ngOnInit(): void {
    this.carroCompra = this.carroService.carro;
    this.carroCompraSubcription$ = this.carroService.carroCompra$.subscribe(carro => {
      console.log('oyente.carro.compra.component', carro);
      this.carroCompra = carro;
    });
  }

  eliminarLineaProducto(productoCarro: CarroCompraProducto) {
    this.carroService.eliminarLineaProducto(productoCarro);
  }

  ngOnDestroy() {
    this.carroCompraSubcription$.unsubscribe();
  }

}
