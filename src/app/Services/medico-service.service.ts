import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Medico } from '../Modelo/Medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoServiceService {

  
  url = 'http://localhost:8484/SpringBootGestionCitas2.1.1/medicos';

  constructor(private http:HttpClient) { }

  getMedicos(){

    return this.http.get<Medico[]>(this.url);
  }


  createMedico(medico:Medico){

    return this.http.post<Medico>(this.url,medico);
  }

  getMedicosId(id:string){
    return this.http.get<Medico>(this.url+"/"+id);
  }

  updateMedico(medico:Medico){

    return this.http.put<Medico>(this.url+"/"+medico.identificacion,medico);
  }

  deleteMedico(medico:Medico){
    return this.http.delete<Medico>(this.url+"/"+medico.identificacion);
  }




}
