import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-producto',
  templateUrl: './reporte-producto.component.html',
  styleUrl: './reporte-producto.component.css'
})
export class ReporteProductoComponent {
  productos : Producto[] = [];


  constructor(private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void {
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    });
  }
}
