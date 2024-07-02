import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})

export class ListarProductoComponent implements OnInit{

  productos: Producto[] = [];
  idProductoBuscar: string = '';

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    });
  }

  editarProducto(codproducto: string) {
    this.router.navigate(['/editarProd', codproducto]);
  }

  eliminarProducto(id: string): void {
    if (confirm('¿Está seguro de eliminar este producto?')) {
      this.productoService.eliminar(id).subscribe(
        () => {
          this.productos = this.productos.filter(c => c.codproducto !== id);
          console.log('Producto eliminado exitosamente.');
        },
        error => {
          console.error('Error al eliminar producto:', error);
        }
      );
    }
  }

  buscarProducto() {
    if (this.idProductoBuscar) {
      this.productoService.buscar(this.idProductoBuscar).subscribe(
        producto => {
          this.productos = [producto];
        },
        error => {
          console.error('Error al buscar producto:', error);
          alert('Producto no encontrado');
        }
      );
    } else {
      this.productoService.listar().subscribe(data => {
        this.productos = data;
      });
    }
  }

  navegarARegistrar() {
    this.router.navigate(['/nuevoProd']);
  }
}
