  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
  import { RegistrarClientesComponent } from './registrar-clientes/registrar-clientes.component';
  import { ActualizarClientesComponent } from './actualizar-clientes/actualizar-clientes.component';
  import { ListarProductoComponent } from './listar-producto/listar-producto.component';
  import { GenerarVentaComponent } from './generar-venta/generar-venta.component';
  import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
  import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
  import { EmpleadosMantenimientoComponent } from './empleados-mantenimiento/empleados-mantenimiento.component';
  import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ReporteClienteComponent } from './reporte-cliente/reporte-cliente.component';
import { ReporteEmpleadoComponent } from './reporte-empleado/reporte-empleado.component';
import { ReporteProductoComponent } from './reporte-producto/reporte-producto.component';
import { LoginEmpleadoComponent } from './login-empleado/login-empleado.component';

const routes: Routes = [
  { path: 'login', component: LoginEmpleadoComponent },
  {path: 'principal', component: PaginaPrincipalComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'listado', component: ListarClientesComponent },
  { path: 'nuevo', component: RegistrarClientesComponent },
  { path: 'nuevoProd', component: RegistrarProductoComponent },
  { path: 'editar/:idcliente', component: ActualizarClientesComponent },
  { path: 'editarProd/:codproducto', component: ActualizarProductoComponent },
  { path: 'generarVenta', component: GenerarVentaComponent },
  { path: 'listProducto', component: ListarProductoComponent},
  { path: 'empleados', component: EmpleadosMantenimientoComponent},
  { path: '**', redirectTo: 'login' } // Redirige a login si la ruta no coincide con ninguna

];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

