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
}
