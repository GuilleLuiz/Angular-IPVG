import { CarroService } from './../../servicios/carro/carro.service';
import { CarroCompra } from './../../modulos/mod-publico/modelos/carro-compra.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MOD_PUBLICO_ROUTES } from 'src/app/modulos/mod-publico/mod-publico.routing';

@Component({
  selector: 'app-navegacion-principal',
  templateUrl: './navegacion-principal.component.html',
  styleUrls: ['./navegacion-principal.component.css']
})
export class NavegacionPrincipalComponent implements OnInit, OnDestroy {

  rutaInicio = '/inicio';
  rutaPaginas=MOD_PUBLICO_ROUTES[0].children?.filter(ruta=>{
    return ruta.path!=='404' && ruta.path!=='**'
  });

  carroCompra!: CarroCompra;
  carroCompraSubcription$!: Subscription;

  constructor(
    private carroService: CarroService
  ) {
  }
  
  ngOnInit(): void {
    this.carroCompra = this.carroService.carro;
    this.carroCompraSubcription$ = this.carroService.carroCompra$.subscribe(carro => {
      console.log('oyente.navegacion.principal.component', carro);
      this.carroCompra = carro;
    });
  }

  ngOnDestroy() {
    this.carroCompraSubcription$.unsubscribe();
  }

}
