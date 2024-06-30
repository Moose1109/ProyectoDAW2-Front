import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../model/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl ='http://localhost:8080/api/productos'

  constructor(private http: HttpClient) { }

  public listar(): Observable<Productos[]>{
    return this.http.get<Productos[]>(this.baseUrl);
  }
}
