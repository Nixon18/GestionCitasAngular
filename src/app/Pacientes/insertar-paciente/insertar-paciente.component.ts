import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelo/Paciente';
import { PacienteServiceService } from 'src/app/Services/paciente-service.service';

@Component({
  selector: 'app-insertar-paciente',
  templateUrl: './insertar-paciente.component.html',

})
export class InsertarPacienteComponent implements OnInit {

  paciente :Paciente = new Paciente();
  constructor(private service:PacienteServiceService, private router:Router) { }

  ngOnInit(){
  }

  guardarPaciente(){
    this.service.createPaciente(this.paciente).subscribe(data=>{
      this.router.navigate(["listarPacientes"]);
    })

  }

}
