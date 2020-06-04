import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPacienteComponent } from './insertar-paciente.component';

describe('InsertarPacienteComponent', () => {
  let component: InsertarPacienteComponent;
  let fixture: ComponentFixture<InsertarPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
