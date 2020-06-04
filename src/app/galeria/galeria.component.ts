import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  
})
export class GaleriaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  listarMedicos(){
    this.router.navigate(["listarMedicos"]);
  }
  listarPacientes(){
    this.router.navigate(["listarPacientes"]);
  }
  listarCitas(){
    this.router.navigate(["listarCitas"]);
  }
  

}
