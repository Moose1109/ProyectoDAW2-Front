import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleados } from '../model/empleados';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private urlBase = 'http://localhost:8080/api/empleados';
  constructor(private http : HttpClient) { }

  // METODOS

  public listar() : Observable<Empleados[]>{
    return this.http.get<Empleados[]>(this.urlBase);
  }

  public agregarEmpleados(empleados: Empleados): Observable<Empleados>{
    return this.http.post<Empleados>(this.urlBase , empleados);
  }

  public buscar(id: string): Observable<Empleados> {
    return this.http.get<Empleados>(this.urlBase + `/${id}`);
  }

  public eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${id}`);

}
}
