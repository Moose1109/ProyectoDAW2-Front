import { Component } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrl: './login-empleado.component.css'
})
export class LoginEmpleadoComponent {
  usuario: string = '';
  pass: string= '';
  error: string = '';

  constructor( private empleaditoService: EmpleadosService, 
    private router: Router) {}

    ingresar() {
      this.empleaditoService.login(this.usuario, this.pass).subscribe(
        response => {
          if (response.status === 200) {
            console.log('Login Exitoso', response.body);
            this.router.navigate(['/principal']); // Redirige al menú principal
          } else {
            this.error = 'Usuario o clave incorrecto(as)';
          }
        },
        error => {
          console.log('Error en el login', error);
          this.error = 'Usuario o clave incorrecto(as)';
        }
      );
    }
}
