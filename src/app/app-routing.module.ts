import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { RegistrarClientesComponent } from './registrar-clientes/registrar-clientes.component';
import { ActualizarClientesComponent } from './actualizar-clientes/actualizar-clientes.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ListarClientesComponent },
  { path: 'nuevo', component: RegistrarClientesComponent },
  { path: 'editar/:idcliente', component: ActualizarClientesComponent },
  { path: 'listProducto', component: ListarProductoComponent},
  { path: '**', redirectTo: '/listado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

