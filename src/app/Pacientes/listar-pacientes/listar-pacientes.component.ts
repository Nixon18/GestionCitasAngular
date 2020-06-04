import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelo/Paciente';
import { PacienteServiceService } from 'src/app/Services/paciente-service.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',

})
export class ListarPacientesComponent implements OnInit {

  pacientes:Paciente[];
  constructor(private  service:PacienteServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPacientes().subscribe(data=>{

      this.pacientes=data;
    })
  }

  insertarPaciente(){
    localStorage.setItem("id","");
    this.router.navigate(["insertarPaciente"]);
  }

  cargarPaciente(paciente: Paciente){
    localStorage.setItem("id",paciente.identificacion.toString());
    this.router.navigate(["actualizarPaciente"]);

  }

eliminarPaciente(paciente: Paciente){
  this.service.deletePaciente(paciente).subscribe(data=>{
    this.pacientes=this.pacientes.filter(p=>p!==paciente);
    alert("Usuario eliminado...");
  })
}



}
