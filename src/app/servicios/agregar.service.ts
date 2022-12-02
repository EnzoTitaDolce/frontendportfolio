import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {
  private _refresh$=new Subject<void>();

  constructor(private http:HttpClient) { }
  private url="https://backendportfolio-production-49b4.up.railway.app/"

  agregarExperiencia(data:any):Observable<any>{
  
    return this.http.post(this.url+'experiencia/crear',data, {responseType:'text', observe:'response'})
  }

  agregarEducacion(data:any):Observable<any>{
    
    return this.http.post(this.url+'educacion/crear',data, {responseType:'text', observe:'response'})
  }

  agregarProyectos(data:any):Observable<any>{

    return this.http.post(this.url+'proyectos/crear',data, {responseType:'text', observe:'response'})
  }

  agregarHabilidades(data:any):Observable<any>{

    return this.http.post(this.url+'habilidades/crear',data, {responseType:'text', observe:'response'})
  }
}
