import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-actualizar-clientes',
  templateUrl: './actualizar-clientes.component.html',
  styleUrls: ['./actualizar-clientes.component.css']
})
export class ActualizarClientesComponent {


  cliente: Cliente = { "idcliente": '',
    "nomcliente": '',
    "apecliente": '',
    "dni": '',
    "direccion": '',
    "celular": '',
    "estado": 1,
    "puesto": ''
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.obtenerCliente();
  }

  obtenerCliente() {
    const id = this.route.snapshot.params['idcliente'];
    this.clienteService.buscar(id).subscribe(
      response => {this.cliente = response},
      error => {
        console.error('Error al obtener el cliente', error)}
    );
  };

  actualizarCliente() {

    this.clienteService.actualizar(this.cliente.idcliente, this.cliente)
    .subscribe(response => {
        console.log('Cliente actualizado con éxito:', response);
        this.router.navigate(['/listado']);
        },
        error => {
        console.error('Error al actualizar el cliente:', error);
        }
    )
  };

}


