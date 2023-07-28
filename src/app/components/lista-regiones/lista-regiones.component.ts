import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Region } from './interfaces/region.interface';
import { Provincia } from '../lista-provincias/interfaces/provincias.interface';

@Component({
  selector: 'app-lista-regiones',
  templateUrl: './lista-regiones.component.html',
  styleUrls: ['./lista-regiones.component.css']
})
export class ListaRegionesComponent implements OnInit {

  titulo: string='Lista Regiones Chile';
  cargandoRegiones: boolean=false;
  regiones:Region[]=[];
  regionClickeada?:Region=undefined;

  tituloProvincias:string='Provincias de la Región de ';
  cargandoProvincias: boolean=false;
  provincias:Provincia[]=[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  
  // cargarRegiones() {
  //   this.cargandoRegiones = true;
  //   console.log('se cargan las regiones');
  //   setTimeout(() => {
  //     const respuestaApi: Region[] = [
  //       {codigo:"15",tipo:"region",nombre:"Arica y Parinacota",lat:-18.5075,lng:-69.6451,url:"",codigo_padre:"00"},
  //       {codigo:"01",tipo:"region",nombre:"Tarapacá",lat:-20.164,lng:-69.5541,url:"",codigo_padre:"00"}
  //     ];
  //     console.log(respuestaApi);
  //     this.regiones = respuestaApi;
  //     console.log(this.regiones[0].nombre);
  //     this.cargandoRegiones = false;
  //   }, 2000);
  // }

  cargarRegiones() {
    const apiGobierno = environment.apiGobierno;
    console.log(apiGobierno);
    this.cargandoRegiones = true;
    console.log('se cargan las regiones');
    this.http.get<Region[]>(apiGobierno).subscribe((respuesta) => {
      this.regiones = respuesta;
      this.cargandoRegiones = false;
    });
  }

  // async cargarRegiones() {
  //   const apiGobierno = environment.apiGobierno;
  //   console.log(apiGobierno);
  //   this.cargandoRegiones = true;
  //   console.log('se cargan las regiones');
  //   const promesa = this.http.get<Region[]>(apiGobierno).toPromise();
  //   this.regiones = await promesa; 
  //   this.cargandoRegiones = false;
  // }

  mostrarCargandoRegiones(): boolean {
    return this.cargandoRegiones;
  }

  mostrarCargandoProvincias(): boolean{
    return this.cargandoProvincias;
  }

  mostrarTituloProvincia(): string{
    return `Provincias de la Región de ${this.regionClickeada?.nombre}`
  }

  mostrarProvincias(region: Region) {        
    if(this.regionClickeada!==region){
      this.regionClickeada=region;
      console.log(this.regionClickeada);
      this.cargarProvincia(this.regionClickeada.codigo);
    }
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
