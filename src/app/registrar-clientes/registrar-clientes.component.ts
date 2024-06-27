import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router'; // Importa Router desde '@angular/router'

@Component({
  selector: 'app-registrar-clientes',
  templateUrl: './registrar-clientes.component.html',
  styleUrls: ['./registrar-clientes.component.css']
})
export class RegistrarClientesComponent {

  nuevoCliente: Cliente = {
    idcliente: '',
    nomcliente: '',
    apecliente: '',
    dni: '',
    direccion: '',
    celular: '',
    estado: 1,
    puesto: ''
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  registrarCliente() {
    this.clienteService.registrar(this.nuevoCliente).subscribe(
      response => {
        console.log('Cliente registrado con éxito:', response);
        // Si no hay error, redirecciona a la ruta '/listado'
        this.router.navigate(['/listado']);
      },
      error => {
        console.error('Error al registrar al cliente:', error);
      }
    );
  }
}
