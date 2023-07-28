import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-cinco',
  templateUrl: './clase-cinco.component.html',
  styleUrls: ['./clase-cinco.component.css']
})
export class ClaseCincoComponent implements OnInit {

  numeros: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 100; i++) {
      this.numeros.push(i);
    }
  }

}
