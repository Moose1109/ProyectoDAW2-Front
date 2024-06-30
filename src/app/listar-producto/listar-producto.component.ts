import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})

export class ListarProductoComponent {

  productos: Producto[] =[];

  constructor(private productoService:ProductoService, private router: Router){}

  ngOnInit(): void{
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    });

  }
  editarProducto(codproducto: string){
    this.router.navigate(['/editar', codproducto])
  };

  eliminarProducto(id: string): void {
    if (confirm('¿Está seguro de eliminar este cliente?')) {
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


}
