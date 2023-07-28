import { environment } from './../../../environments/environment';
import { LoginRespuesta, LoginRequest } from './../../modulos/mod-publico/modelos/login.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(request: LoginRequest) {
    return this.http.post<LoginRespuesta>(environment.apiStore + 'auth/login', request).pipe(
      map(respuesta => {
        respuesta.username = request.username;
        localStorage.setItem('usuario', request.username);
        localStorage.setItem('token', respuesta.token);
        return respuesta;
      })
    );
  }
}
