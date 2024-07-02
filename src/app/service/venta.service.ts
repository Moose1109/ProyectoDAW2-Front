import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private baseUrl ='http://localhost:8080/api/ventas'

  constructor(private http: HttpClient) { }

 // Método para registrar una venta
 registrarVenta(ventaData: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/api/ventas/generarVenta`, ventaData);
}

// Método para eliminar un ítem del carrito
eliminarItem(index: number): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}/api/ventas/eliminarItem/${index}`);
}

// Método para guardar detalle de producto en una venta
guardarDetalleProducto(productoData: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/api/ventas/guardarDetalleProducto`, productoData);
}
}
