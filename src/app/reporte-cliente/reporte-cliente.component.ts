import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-cliente',
  templateUrl: './reporte-cliente.component.html',
  styleUrl: './reporte-cliente.component.css'
})
export class ReporteClienteComponent {

clientes: Cliente[] =[];

constructor(
  private clienteService: ClienteService,
  private router: Router
) { }

ngOnInit() {
  this.clienteService.listar().subscribe(data => {
    this.clientes = data;
  });
}

}
