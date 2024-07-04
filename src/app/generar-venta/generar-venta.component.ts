import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';
import { Venta } from '../model/venta';
import {ItemVenta} from '../model/item-venta';
import { VentaService } from '../service/venta.service';
import { error } from 'node:console';

@Component({
  selector: 'app-generar-venta',
  templateUrl: './generar-venta.component.html',
  styleUrl: './generar-venta.component.css'
})
export class GenerarVentaComponent {

  cliente : Cliente[] = [];
  producto : Producto[] = []
  itemVentas : ItemVenta[] =[]

  constructor(private clienteService :ClienteService,
    private productoService : ProductoService,
    private ventaService : VentaService ,
    private Router:Router ) { }

  ngOnInit():void {
    this.clienteService.listar().subscribe(data => {
      this.cliente = data;
    });
    this.productoService.listar().subscribe(data => {
      this.producto = data;
    });


  
  }


  itemVenta: ItemVenta = new ItemVenta(0, '', '', 0, 0, 0);



  eliminarItem(item:number){};




    agregarItemVenta(): void {

      this.ventaService.guardarDetalleProducto(this.itemVenta).subscribe(
        response => {
          console.log('Detalle agregado con éxito:', response);
          this.itemVentas.push(this.itemVenta);
          this.itemVenta = new ItemVenta(0, '', '', 0, 0, 0);
        },error => {
          console.error('Error al agregar el detalle:', error);
        }
      )
    }



  /*-------------------------------------- JS-----------------------------------------------------------------------------------------------*/ 
  selectedCliente = {
    idcliente: '',
    nomcliente: '',
    dni: '',
    telefono: ''
  };

  actualizarCamposCliente(event: any) {
    const select = event.target;
    const selectedOption = select.options[select.selectedIndex];

    this.selectedCliente.idcliente = selectedOption.getAttribute('data-codigo') || '';
    this.selectedCliente.nomcliente = selectedOption.getAttribute('data-cliente') || '';
    this.selectedCliente.dni = selectedOption.getAttribute('data-dni') || '';
    this.selectedCliente.telefono = selectedOption.getAttribute('data-telefono') || '';



  }



  selectedProducto = {
    precio: '',
    codigo: '',
    stock: '',

  };
    actualizarCamposProductos(event: any) {
      const select = event.target;
      const selectedOption = select.options[select.selectedIndex];
  
      this.selectedProducto.precio = selectedOption.getAttribute('data-precio') || '';
      this.selectedProducto.stock = selectedOption.getAttribute('data-stock') || '';

    }

  };



  
    /*-------------------------------------- JS-----------------------------------------------------------------------------------------------*/ 
  
  




