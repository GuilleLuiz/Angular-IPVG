import { LoginService } from './../../../../servicios/login/login.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    this.loginService.login(this.form.value).subscribe(respuesta => {
      this.form.enable();
      // falseado
      console.log(respuesta);
      // localStorage.setItem('usuario', this.form.value.username);
      // localStorage.setItem('token', respuesta.token);
      if (this.form.value.username === 'johnd') { // es cliente
        // nos manda al modulo cliente
        this.router.navigate(['/modulo-cliente/inicio']);
      } else { // es usuario
        // nos manda al modulo usuario
        this.router.navigate(['/modulo-usuario/inicio']);
      }
    });
  }

}
