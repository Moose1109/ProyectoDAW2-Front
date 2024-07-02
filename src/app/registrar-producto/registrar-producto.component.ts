import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrl: './registrar-producto.component.css'
})
export class RegistrarProductoComponent {

  nuevoProducto: Producto = {
    "codproducto": '',
    "nomproducto": '',
    "idcategoria": 0,
    "precio": 0,
    "stock": 0,
    "estado": 1,
    "objCategoria": {idcategoria: 1, nomcategoria: ''}
  };

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  onSubmit() {
    this.registrarProducto();
  }

  registrarProducto(){
    this.productoService.registrar(this.nuevoProducto).subscribe(
      {
        next: (datos) => {
          console.log('Producto registrado con éxito', datos);
          this.irListaProductos();
        },
        error: (error: any) => {
          console.error('Error al registrar el producto', error);
        }
      }
    );
  }

  irListaProductos() {
    this.router.navigate(['/listProducto']);
  }





}
