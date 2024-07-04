import { Component } from '@angular/core';
import { Empleados } from '../model/empleados';
import { EmpleadosService } from '../service/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-empleado',
  templateUrl: './reporte-empleado.component.html',
  styleUrl: './reporte-empleado.component.css'
})
export class ReporteEmpleadoComponent {
  empleados: Empleados[] = [];

  constructor(private empleadosService: EmpleadosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarEmpleados();
  }

  listarEmpleados(): void {
    this.empleadosService.listar().subscribe(data => {
      this.empleados = data;
    });
  }
}
