import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Provincia } from './interfaces/provincias.interface';
import { Region } from '../lista-regiones/interfaces/region.interface';

@Component({
  selector: 'app-lista-provincias',
  templateUrl: './lista-provincias.component.html',
  styleUrls: ['./lista-provincias.component.css']
})
export class ListaProvinciasComponent implements OnInit {
  
  @Input() codigo='';
  regionClickeada?:Region=undefined;
  cargandoProvincias: boolean=false;
  provincias:Provincia[]=[]

  constructor(private http:HttpClient) {
    console.log(this.codigo);
    this.cargarProvincia(this.codigo);
  }

  ngOnInit(): void {
  }


  mostrarCargandoProvincias(): boolean{
    return this.cargandoProvincias;
  }

  cargarProvincia(codigo:string){
    const apiProvincias = environment.apiGobierno + `/${codigo}/provincias`;    
    console.log(apiProvincias);
    this.cargandoProvincias = true;
    console.log('se cargan las provincias');
    this.http.get<Provincia[]>(apiProvincias).subscribe((respuesta) => {
      this.provincias = respuesta;
      this.cargandoProvincias = false;
    });
  }

}
