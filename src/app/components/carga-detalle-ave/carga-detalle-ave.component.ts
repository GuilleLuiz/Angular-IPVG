import { environment } from './../../../environments/environment';
import { Ave } from './../lista-aves/interfaces/lista-ave.interface';
import { DetalleAve } from './../lista-aves/interfaces/detalle-ave.interface';
import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carga-detalle-ave',
  templateUrl: './carga-detalle-ave.component.html',
  styleUrls: ['./carga-detalle-ave.component.css']
})
export class CargaDetalleAveComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  apiAves: string = environment.apiAves;

  // @Input() ave!: Ave;

  // public string Name {get; set;}
  _ave!: Ave;
  get ave(): Ave {
    return this._ave;
  }
  @Input() set ave(ave: Ave) {
    this._ave = ave;
    console.log('set Variable');
    this.cargarDetalleAve(this.ave);
  }

  cargandoDetalleAve: boolean = false;
  detalleAve!: DetalleAve;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('ngOnInit', this.ave);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes, this.ave);
    // if (changes.ave) {
    //   this.cargarDetalleAve(this.ave);
    // }
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  cargarDetalleAve(ave: Ave) {
    this.cargandoDetalleAve = true;
    console.log('ave clickeada', ave);
    console.log('cargando detalles de la ave');
    this.http.get<DetalleAve>(this.apiAves + '/' + ave.uid).subscribe(respuesta => {
      this.detalleAve = respuesta;
      this.cargandoDetalleAve = false;
    });
  }

  tieneIucn(ave: DetalleAve): boolean {
    return ave.iucn != null && ave.iucn.title != null && ave.iucn.description != null;
  }

  recargar() {
    this.cargarDetalleAve(this.ave);
  }

}