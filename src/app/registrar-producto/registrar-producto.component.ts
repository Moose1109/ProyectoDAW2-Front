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
    codproducto: '',
    nomproducto: '',
    idcategoria: 0,
    precio: 0,
    stock: 0,
    estado: 1,
    objCategoria: {idcategoria: 1, nomcategoria: ''}
  };

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  onSubmit() {
    this.registrarProducto();
  }

  listarProductos(): void {
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    });
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

  agregarProducto(): void {
    this.productoService.registrar(this.nuevoProducto).subscribe(response => {
      console.log('Evento registrado con éxito:', response);
      this.productos.push(response); // Agrega el nuevo evento a la lista
      this.nuevoProducto = {
        codproducto: '',
        nomproducto: '',
        idcategoria: 0,
        precio: 0,
        stock: 0,
        estado: 1,
        objCategoria: {idcategoria: 1, nomcategoria: ''}
      }
      this.router.navigate(['listProducto']);
      this.listarProductos();

    }, error => {
      console.error('Error al registrar el producto:', error);
    });
  }

  irListaProductos() {
    this.router.navigate(['/listProducto']);
  }





}
