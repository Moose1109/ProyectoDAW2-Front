import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosMantenimientoComponent } from './empleados-mantenimiento.component';

describe('EmpleadosMantenimientoComponent', () => {
  let component: EmpleadosMantenimientoComponent;
  let fixture: ComponentFixture<EmpleadosMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadosMantenimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
