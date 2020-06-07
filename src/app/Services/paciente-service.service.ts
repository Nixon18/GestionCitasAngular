import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Paciente } from '../Modelo/Paciente';


@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {

  url = 'http://localhost:8484/SpringBootGestionCitas2.1.1/pacientes';

  constructor(private http:HttpClient) { }

  getPacientes(){

    return this.http.get<Paciente[]>(this.url);
  }


  createPaciente(paciente:Paciente){

    return this.http.post<Paciente>(this.url,paciente);
  }

  getPacientesId(id:string){
    return this.http.get<Paciente>(this.url+"/"+id);
  }

  uptdatePaciente(paciente:Paciente){

    return this.http.put<Paciente>(this.url+"/"+paciente.identificacion,paciente);
  }

  deletePaciente(paciente:Paciente){
    return this.http.delete<Paciente>(this.url+"/"+paciente.identificacion);
  }

}
