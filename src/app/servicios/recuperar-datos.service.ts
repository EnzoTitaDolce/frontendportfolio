import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecuperarDatosService {

  constructor(private http:HttpClient) { }
  private url="https://glacial-thicket-41724.herokuapp.com/"
               
  getPersonas():Observable<any>{
    
    return this.http.get(this.url+'personas/traer');    
  }
  getEducacion():Observable<any>{
    return this.http.get(this.url+"educacion/traer");
  }
  getExperiencia():Observable<any>{
    return this.http.get(this.url+"experiencia/traer");
  }
  getProyectos():Observable<any>{
    return this.http.get(this.url+"proyectos/traer")
  }
  getHabilidades():Observable<any>{
    return this.http.get(this.url+"habilidades/traer")
  }
}
