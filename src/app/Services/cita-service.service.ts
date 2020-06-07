import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpRequest,HttpResponse} from '@angular/common/http';
import { Cita } from '../Modelo/Cita';
import { Response } from '../Modelo/Response';


@Injectable({
  providedIn: 'root'
})
export class CitaServiceService {

  url = 'http://localhost:8484/SpringBootGestionCitas2.1.1/citas';

  constructor(private http:HttpClient) { }

  getCitas(){
    return this.http.get<Cita[]>(this.url);  
  }

  createCita(cita:Cita){
    return this.http.post<Response>(this.url,cita); 
  }
}
