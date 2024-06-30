import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = "http://localhost:8080/api/productos";

  constructor(private http: HttpClient) { }

  public listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl);
  }

  public registrar(producto: Producto): Observable<any> {
    return this.http.post<Producto>(this.baseUrl, producto);
  }

  public buscar(id:string): Observable<Producto> {
    return this.http.get<Producto>(this.baseUrl + `/${id}`);
  }


  public actualizar(id:string, producto: Producto): Observable<any> {
    return this.http.put(this.baseUrl + `/${id}`, producto);
  }

  public registar(producto: Producto): Observable<Object>{
    return this.http.post(this.baseUrl, producto);
  }

  public eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
