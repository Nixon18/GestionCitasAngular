import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/Modelo/Medico';
import { MedicoServiceService } from 'src/app/Services/medico-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-medicos.component.html',
  
})
export class ListarMedicosComponent implements OnInit {

  medicos: Medico[];
  constructor(private  service:MedicoServiceService, private router:Router) { }

  ngOnInit(){

    this.service.getMedicos().subscribe(data=>{

      this.medicos=data;
    })
  }

 
  insertarMedico(){
   localStorage.setItem("id","");
    this.router.navigate(["insertarMedico"]);
  }

  cargarMedico(medico: Medico){
    localStorage.setItem("id",medico.identificacion.toString());
    this.router.navigate(["actualizarMedico"]);

  }

eliminarMedico(medico: Medico){
  this.service.deleteMedico(medico).subscribe(data=>{
    this.medicos=this.medicos.filter(p=>p!==medico);
    alert("Usuario eliminado...");
  })
}


}
