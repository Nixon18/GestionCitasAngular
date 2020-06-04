import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarMedicosComponent} from './Medicos/listar-medicos/listar-medicos.component';
import { InsertarMedicoComponent } from './Medicos/insertar-medico/insertar-medico.component';
import { ActualizarMedicoComponent } from './Medicos/actualizar-medico/actualizar-medico.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GaleriaComponent } from './galeria/galeria.component';
import { ListarPacientesComponent } from './Pacientes/listar-pacientes/listar-pacientes.component';
import { InsertarPacienteComponent } from './Pacientes/insertar-paciente/insertar-paciente.component';
import { ActualizarPacienteComponent } from './Pacientes/actualizar-paciente/actualizar-paciente.component';
import { ListarCitasComponent } from './Citas/listar-citas/listar-citas.component';
import { InsertarCitaComponent } from './Citas/insertar-cita/insertar-cita.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RangoMaximoDirective } from './Validations/rango-maximo.directive';
import { FormularioMedicoComponent } from './Componentes/formulario-medico/formulario-medico.component';
import { FormularioPacienteComponent } from './Componentes/formulario-paciente/formulario-paciente.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarMedicosComponent,
    InsertarMedicoComponent,
    ActualizarMedicoComponent,
    GaleriaComponent,
    ListarPacientesComponent,
    InsertarPacienteComponent,
    ActualizarPacienteComponent,
    ListarCitasComponent,
    InsertarCitaComponent,
    RangoMaximoDirective,
    FormularioMedicoComponent,
    FormularioPacienteComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
