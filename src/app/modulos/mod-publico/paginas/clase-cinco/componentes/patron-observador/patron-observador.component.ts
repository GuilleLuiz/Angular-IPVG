import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-patron-observador',
  templateUrl: './patron-observador.component.html',
  styleUrls: ['./patron-observador.component.css']
})
export class PatronObservadorComponent implements OnInit, OnDestroy {

  // Sujeto | Observador | Oyentes
  // Si Observador detecta cambios en sujeto, notifica a oyentes

  numero$ = new Subject<number>();
  subscripcionOyente1!: Subscription;
  subscripcionOyente2!: Subscription;
  subscripcionOyente3!: Subscription;

  ngOnInit() {
    this.subscripcionOyente1 = this.numero$.subscribe((numero) => {
      console.log('numero.escuchado oyente 1', numero);
    });
    this.subscripcionOyente2 = this.numero$.subscribe((numero) => {
      console.log('numero.escuchado oyente 2', numero);
    });
    this.subscripcionOyente3 = this.numero$.pipe(
      take(1), // Como le pasamos "1" solo va a tomar el primer ".next(42)"
      map(numero => {
        return numero * 2;
      }),
      map(numero => {
        return numero - 4;
      }),
      tap((numero) => {
        console.log('llega como', numero);
        this.hacerAlgoEnElTap();
      })
    ).subscribe((numero) => {
      console.log('numero.escuchado oyente 3', numero);
    });
    // Se detectó un cambio y se notifica oyentes
    this.numero$.next(42);
    this.numero$.next(50);
  }

  hacerAlgoEnElTap() {
    console.log('estoy en el tap');
  }

  ngOnDestroy() {
    this.subscripcionOyente1.unsubscribe();
    this.subscripcionOyente2.unsubscribe();
    this.subscripcionOyente3.unsubscribe();
  }

}
