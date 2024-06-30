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

  nuevoCliente: Cliente = { "idcliente": '',
    "nomcliente": '',
    "apecliente": '',
    "dni": '',
    "direccion": '',
    "celular": '',
    "estado": 1,
    "puesto": ''
  };


  
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  onSubmit() {
    this.registrarCliente();
  }

  registrarCliente(){
    this.clienteService.registar(this.nuevoCliente).subscribe(
      {
        next: (datos) => {
          console.log('Cliente registrado con éxito', datos);
          this.irListaClientes();
        },
        error: (error: any) => {
          console.error('Error al registrar el cliente', error);
        }
      }
    );
  }

  irListaClientes() {
    this.router.navigate(['/listado']);
  }
}




