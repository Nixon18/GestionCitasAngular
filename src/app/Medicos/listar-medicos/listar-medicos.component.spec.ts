import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMedicosComponent } from './listar-medicos.component';

describe('ListarComponent', () => {
  let component: ListarMedicosComponent;
  let fixture: ComponentFixture<ListarMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
