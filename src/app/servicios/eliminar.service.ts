import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EliminarService {


  constructor(private http:HttpClient) {}

  private url="https://backendportfolio-production-49b4.up.railway.app/"



    eliminarExperiencia(id:number):Observable<any>{

      return this.http.delete(this.url+"experiencia/borrar/"+id, {responseType:'text', observe:'response'})

    }

    eliminarEducacion(id:number):Observable<any>{

      return this.http.delete(this.url+"educacion/borrar/"+id, {responseType:'text', observe:'response'})

    }

    eliminarProyectos(id:number):Observable<any>{

      return this.http.delete(this.url+"proyectos/borrar/"+id, {responseType:'text', observe:'response'})

    }

    eliminarHabilidades(id:number):Observable<any>{

      return this.http.delete(this.url+"habilidades/borrar/"+id, {responseType:'text', observe:'response'})
                                       
    }
   
}
