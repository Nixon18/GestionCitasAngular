import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMedicosComponent } from './Medicos/listar-medicos/listar-medicos.component';
import { InsertarMedicoComponent } from './Medicos/insertar-medico/insertar-medico.component';
import { ActualizarMedicoComponent } from './Medicos/actualizar-medico/actualizar-medico.component';
import { ListarPacientesComponent } from './Pacientes/listar-pacientes/listar-pacientes.component';
import { InsertarPacienteComponent } from './Pacientes/insertar-paciente/insertar-paciente.component';
import { ActualizarPacienteComponent } from './Pacientes/actualizar-paciente/actualizar-paciente.component';
import { ListarCitasComponent } from './Citas/listar-citas/listar-citas.component';
import { InsertarCitaComponent } from './Citas/insertar-cita/insertar-cita.component';


const routes: Routes = [
  {path:'listarMedicos', component:ListarMedicosComponent},
  {path:'insertarMedico', component:InsertarMedicoComponent},
  {path:'actualizarMedico', component:ActualizarMedicoComponent},

  {path:'listarPacientes', component:ListarPacientesComponent},
  {path:'insertarPaciente', component:InsertarPacienteComponent},
  {path:'actualizarPaciente', component:ActualizarPacienteComponent},

  {path:'listarCitas', component:ListarCitasComponent},
  {path:'insertarCita', component:InsertarCitaComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

