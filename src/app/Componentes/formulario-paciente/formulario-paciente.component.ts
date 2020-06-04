import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelo/Paciente';
import { PacienteServiceService } from 'src/app/Services/paciente-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  
})
export class FormularioPacienteComponent implements OnInit {

  paciente :Paciente = new Paciente();
  id=localStorage.getItem("id");
  constructor(private service:PacienteServiceService, private router:Router) { }

  ngOnInit(): void {
    if(this.id.localeCompare("") !== 0){
      this.obtenerPaciente();
    }
  }

  obtenerPaciente(){
    this.service.getPacientesId(this.id).subscribe(data=>{
    this.paciente=data;
    })

  }
 
  gestionarPaciente(paciente:Paciente){

    this.paciente = paciente;

    if(this.id.localeCompare("") !== 0){
      this.paciente.identificacion =this.id;
      this.observadorPaciente(this.service.uptdatePaciente( this.paciente));
      
    }else{
      this.observadorPaciente(this.service.createPaciente(this.paciente));
      
    }

  }

  observadorPaciente(paciente:Observable<Paciente>){

    return paciente.subscribe(data=>{
      this.paciente=data;
      
      this.router.navigate(["listarMedicos"]);
      })
}


}
