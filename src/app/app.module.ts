  import { NgModule } from '@angular/core';
  import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { HttpClientModule } from '@angular/common/http';
  import { FormsModule } from '@angular/forms';

  import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

  import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
  import { RegistrarClientesComponent } from './registrar-clientes/registrar-clientes.component';


  import { ActualizarClientesComponent } from './actualizar-clientes/actualizar-clientes.component';
  import { ListarProductoComponent } from './listar-producto/listar-producto.component';
  import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
  import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
  import { GenerarVentaComponent } from './generar-venta/generar-venta.component';
  import { EmpleadosMantenimientoComponent } from './empleados-mantenimiento/empleados-mantenimiento.component';
import { ReporteProductoComponent } from './reporte-producto/reporte-producto.component';
import { ReporteClienteComponent } from './reporte-cliente/reporte-cliente.component';
import { ReporteEmpleadoComponent } from './reporte-empleado/reporte-empleado.component';
import { LoginEmpleadoComponent } from './login-empleado/login-empleado.component';



  @NgModule({
    declarations: [
      AppComponent,
      PaginaPrincipalComponent,
      ListarClientesComponent,
      RegistrarClientesComponent,
      ActualizarClientesComponent,
      GenerarVentaComponent,
      ListarProductoComponent,
      ActualizarProductoComponent,
      RegistrarProductoComponent,
      EmpleadosMantenimientoComponent,
      ReporteProductoComponent,
      ReporteClienteComponent,
      ReporteEmpleadoComponent,
      LoginEmpleadoComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
    ],
    providers: [
      provideClientHydration()
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

