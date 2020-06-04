import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/Modelo/Medico';
import { MedicoServiceService } from 'src/app/Services/medico-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './insertar-medico.component.html',
 
})
export class InsertarMedicoComponent implements OnInit {

  medico:Medico = new Medico();
  constructor(private service:MedicoServiceService, private router:Router) { }

  ngOnInit(){
  }

  guardarMedico(){
    this.service.createMedico(this.medico).subscribe(data=>{
      this.router.navigate(["listarMedicos"]);
    })

  }

}
