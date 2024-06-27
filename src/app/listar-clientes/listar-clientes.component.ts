import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrl: './listar-clientes.component.css'
})
export class ListarClientesComponent {

  clientes : Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

    ngOnInit(){
        this.clienteService.listar().subscribe(data => {
          this.clientes = data;
        });
    }

}
