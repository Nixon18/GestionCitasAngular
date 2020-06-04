import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/Modelo/Medico';
import { MedicoServiceService } from 'src/app/Services/medico-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './actualizar-medico.component.html',
 
})
export class ActualizarMedicoComponent implements OnInit {

  medico :Medico = new Medico();
  constructor(private  service:MedicoServiceService, private router:Router) { }

  ngOnInit(){
    this.obtenerMedico();
  }

  obtenerMedico(){
    let id=localStorage.getItem("id");
    this.service.getMedicosId(id).subscribe(data=>{
    this.medico=data;
    })

  }
  actualizarMedico(medico:Medico){

        let id=localStorage.getItem("id");
        this.medico = medico;
        this.medico.identificacion =id;

        this.service.updateMedico( this.medico).subscribe(data=>{
        this.medico=data;
        
        this.router.navigate(["listarMedicos"]);
        })
   
  }


}
