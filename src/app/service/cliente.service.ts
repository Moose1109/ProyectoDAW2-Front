import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  public listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  public registrar(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.baseUrl, cliente);
  }

  public buscar(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseUrl + `/${id}`);
  }

  public actualizar(id: string, cliente: Cliente): Observable<any> {
    return this.http.put(this.baseUrl + `/${id}`, cliente);
  }

  public eliminarCliente(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

