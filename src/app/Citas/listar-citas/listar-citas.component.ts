import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Modelo/Cita';
import { CitaServiceService } from 'src/app/Services/cita-service.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',

})
export class ListarCitasComponent implements OnInit {

  citas :Cita[];
  constructor(private  service:CitaServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getCitas().subscribe(data=>{

      this.citas=data;
    })
  }

  insertarCita(){
    this.router.navigate(["insertarCita"]);
  }

}
