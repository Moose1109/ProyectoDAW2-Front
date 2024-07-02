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

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ListarClientesComponent },
  { path: 'nuevo', component: RegistrarClientesComponent },
  { path: 'editar/:idcliente', component: ActualizarClientesComponent },
  { path: 'generarVenta', component: GenerarVentaComponent },
  { path: 'listProducto', component: ListarProductoComponent},
  { path: 'empleados', component: EmpleadosMantenimientoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

