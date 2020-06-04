import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelo/Paciente';
import { PacienteServiceService } from 'src/app/Services/paciente-service.service';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
 
})
export class ActualizarPacienteComponent implements OnInit {

  paciente :Paciente = new Paciente();
  constructor(private service:PacienteServiceService, private router:Router) { }

  ngOnInit() {
    this.obtenerPaciente();
  }

  obtenerPaciente(){
    let id=localStorage.getItem("id");
    this.service.getPacientesId(id).subscribe(data=>{
    this.paciente=data;
    })

  }
  actualizarPaciente(paciente:Paciente){
    this.service.uptdatePaciente(paciente).subscribe(data=>{
    this.paciente=data;
    alert("Se Actualizo con Exito...!!!");
    this.router.navigate(["listarPacientes"]);
    })
  }

}
