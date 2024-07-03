import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {

  producto: Producto = {
    "codproducto": '',
    "nomproducto": '',
    "idcategoria": 0,
    "precio": 0,
    "stock": 0,
    "estado": 1,
    /*"objCategoria": {idcategoria: 1, nomcategoria: ''}*/
  };

  productos: Producto[] = [];
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) { }

  ngOnInit() {
    this.obtenerProducto();
  }

  listarProducto(){
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    });
  }

  obtenerProducto() {
    const id = this.route.snapshot.params['codproducto'];
    this.productoService.buscar(id).subscribe(
      response => {this.producto = response},
      error => {
        console.error('Error al obtener el producto', error)}
    );
  };

  actualizarProducto() {

    this.productoService.actualizar(this.producto.codproducto, this.producto)
    .subscribe(response => {
        console.log('Producto actualizado con éxito:', response);
        this.router.navigate(['/listProducto']);
        },
        error => {
        console.error('Error al actualizar el producto:', error);
        }
    )
  };

}
