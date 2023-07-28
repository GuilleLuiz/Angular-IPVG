import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var control='54NRRFFL'
    var n=control.slice(0,1)
    var m=control.slice(1,2)
    var commands=control.slice(2)

    console.log(control);
    console.log(n);
    console.log(m);
    console.log(commands);
  }

}
