import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  idClienteBuscar: string = '';

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clienteService.listar().subscribe(data => {
      this.clientes = data;
    });
  }

  editarCliente(idcliente: string) {
    this.router.navigate(['/editar', idcliente]);
  }

  eliminarCliente(id: string): void {
    if (confirm('¿Está seguro de eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe(
        () => {
          this.clientes = this.clientes.filter(c => c.idcliente !== id);
          console.log('Cliente eliminado exitosamente.');
        },
        error => {
          console.error('Error al eliminar cliente:', error);
        }
      );
    }
  }

  buscarCliente() {
    if (this.idClienteBuscar) {
      this.clienteService.buscar(this.idClienteBuscar).subscribe(
        cliente => {
          this.clientes = [cliente];
        },
        error => {
          console.error('Error al buscar cliente:', error);
          alert('Cliente no encontrado');
        }
      );
    } else {
      this.clienteService.listar().subscribe(data => {
        this.clientes = data;
      });
    }
  }

  navegarARegistrar() {
    this.router.navigate(['/nuevo']);
  }
}




