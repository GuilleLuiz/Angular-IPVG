import { DetalleUsuario } from './../../modelos/detall-usuario.interface';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardClienteGuard implements CanActivate {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('token');
      const usuario = localStorage.getItem('usuario');
      if (!token || !usuario) {
        return this.router.navigate(['/inicio']);
      }

      // Solo para ejemplificar. Se hace petición al backend para saber si pueden entrar o no 
      const userId = usuario && usuario === 'johnd' ? 1 : 2;
      const miPromesa = this.http.get<DetalleUsuario>(environment.apiStore + 'users/' + userId).toPromise();
      return miPromesa.then(detalleUsuario => {
        if (detalleUsuario.name.firstname === 'john' && detalleUsuario.name.lastname === 'doe') {
          return Promise.resolve(true);
        }
        return this.router.navigate(['/inicio']);
      });
  }
  
}
