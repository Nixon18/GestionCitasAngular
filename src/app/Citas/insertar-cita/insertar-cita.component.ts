import { Component, OnInit, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Modelo/Cita';
import { CitaServiceService } from 'src/app/Services/cita-service.service';
import { PacienteServiceService } from 'src/app/Services/paciente-service.service';
import { MedicoServiceService } from 'src/app/Services/medico-service.service';
import { Response } from 'src/app/Modelo/Response';


@Component({
  selector: 'app-insertar-cita',
  templateUrl: './insertar-cita.component.html',

})
export class InsertarCitaComponent implements OnInit {

cita:Cita = new Cita();
responseCita :Response = new Response();
constructor(private citaService:CitaServiceService, private router:Router,private pacienteService : PacienteServiceService,private medicoService :MedicoServiceService) { }

  ngOnInit(){
    
  }
  guardarCita(){ 

    this.citaService.createCita(this.cita).subscribe(data=>{
        this.responseCita = data;
        if(this.responseCita.estado.localeCompare("aceptado") == 0){
          this.router.navigate(["listarCitas"]);

        }
    
    })   
  }

}
