import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/Modelo/Medico';
import { MedicoServiceService } from 'src/app/Services/medico-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'formulario-medico',
  templateUrl: './formulario-medico.component.html',
  
})
export class FormularioMedicoComponent implements OnInit {

  medico:Medico = new Medico();
  id=localStorage.getItem("id");
  constructor(private service:MedicoServiceService, private router:Router) { }

  ngOnInit(){ 
    if(this.id.localeCompare("") !== 0){
      this.obtenerMedico();
    }
    
  }
  obtenerMedico(){
    
    this.service.getMedicosId(this.id).subscribe(data=>{
    this.medico=data;
    })

  }

    gestionarMedico(medico:Medico){

      this.medico = medico;

      if(this.id.localeCompare("") !== 0){
        this.medico.identificacion =this.id;
        this.observadorMedico( this.service.updateMedico( this.medico));
        
      }else{
        this.observadorMedico( this.service.createMedico(this.medico));    
      }
   

    }
    observadorMedico(medico:Observable<Medico>){

        return medico.subscribe(data=>{
          this.medico=data;
          
          this.router.navigate(["listarMedicos"]);
          })
    }

  }



