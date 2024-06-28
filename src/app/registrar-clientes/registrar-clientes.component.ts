import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-registrar-clientes',
  templateUrl: './registrar-clientes.component.html',
  styleUrls: ['./registrar-clientes.component.css']
})
export class RegistrarClientesComponent {

  nuevoCliente: Cliente = {
    "idcliente": '',
    "nomcliente": '',
    "apecliente": '',
    "dni": '',
    "direccion": '',
    "celular": '',
    "estado": 1,
    "puesto": ''
  };

  constructor(private clienteService: ClienteService,
    private router: Router) { }

    registrarCliente() {

      this.clienteService.registrar(this.nuevoCliente).subscribe(
        response => {
          console.log('Cliente registrado con éxito:', response);
          //si no hay error redirecciona
          this.router.navigate(['/listado']);
          },
          error => {
          console.error('Error al registrar el Cliente:', error);
          }
      )
    };
}


