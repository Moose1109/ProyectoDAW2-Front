import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { Productos } from '../model/productos';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-generar-venta',
  templateUrl: './generar-venta.component.html',
  styleUrl: './generar-venta.component.css'
})
export class GenerarVentaComponent {

  cliente : Cliente[] = [];
  producto : Productos[] = []

  constructor(private clienteService :ClienteService,
    private productoService : ProductoService,
    private Router:Router ) { }

  ngOnInit():void {
    this.clienteService.listar().subscribe(data => {
      this.cliente = data;
    });
    this.productoService.listar().subscribe(data => {
      this.producto = data;
    });
  
  }
  
  
  
  



}
