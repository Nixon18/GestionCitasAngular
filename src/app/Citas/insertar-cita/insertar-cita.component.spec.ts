import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarCitaComponent } from './insertar-cita.component';

describe('InsertarCitaComponent', () => {
  let component: InsertarCitaComponent;
  let fixture: ComponentFixture<InsertarCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
