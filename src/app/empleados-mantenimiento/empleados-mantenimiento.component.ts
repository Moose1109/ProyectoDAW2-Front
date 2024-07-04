import { Component, OnInit } from '@angular/core';
import { Empleados } from '../model/empleados';
import { EmpleadosService } from '../service/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados-mantenimiento',
  templateUrl: './empleados-mantenimiento.component.html',
  styleUrl: './empleados-mantenimiento.component.css'
})
export class EmpleadosMantenimientoComponent implements OnInit {

  // OBJETOS
  nuevoEmpleado: Empleados = {
    idempleado: '',
    nomempleado: '',
    apeempleado: '',
    dni: '',
    fechanacimiento: '',
    usuario: '',
    pass: '',
    estado: 0,

  };



  empleados: Empleados[] = [];

  // Constructor
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

  agregarEmpleados(): void {
    this.empleadosService.agregarEmpleados(this.nuevoEmpleado).subscribe(response => {
      console.log('Evento registrado con éxito:', response);
      this.empleados.push(response); // Agrega el nuevo evento a la lista
      this.nuevoEmpleado = {
        idempleado: '',
        nomempleado: '',
        apeempleado: '',
        dni: '',
        fechanacimiento: '',
        usuario: '',
        pass: '',
        estado: 0,
      }
      this.router.navigate(['eventos']);
      this.listarEmpleados();

    }, error => {
      console.error('Error al registrar el evento:', error);
    });
  }

  buscarEmpleado(id: string) {
    this.empleadosService.buscar(id).subscribe(data =>{
      this.nuevoEmpleado = data
      console.log(this.nuevoEmpleado);
    })
  }

  eliminarEmpleado(id: string): void {
    this.empleadosService.eliminar(id).subscribe(response => {
      console.log('Evento eliminado:' + Response);
      this.listarEmpleados();
      this.router.navigate(['empleados']);
    },
    error => {
      console.error('Error al registrar el empleado:', error);
    });
  }
}
