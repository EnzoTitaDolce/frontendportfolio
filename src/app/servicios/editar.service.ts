import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  constructor(private http:HttpClient) { }

  private url="https://glacial-thicket-41724.herokuapp.com/"

  editarExperienciaServicio(id:number, data:any):Observable<any>{

    return this.http.patch(this.url+'experiencia/editar/'+id+'?'+'nombreEmpresa='+data.nombreEmpresa+'&'+
    'fechaFin='+data.fechaFin+'&'+'fechaInicio='+data.fechaInicio+'&'+'descripcion='+data.descripcion+'&trabajoActual='+data.trabajoActual,{},
     {responseType:'text', observe:'response'})
  }
  editarEducacionServicio(id:number, data:any):Observable<any>{

    return this.http.put(this.url+'educacion/editar/'+id+'?'+'institucion='+data.institucion+'&'+
    'carrera='+data.carrera+'&anioInicio='+data.anioInicio+'&anioFin='+data.anioFin+'&nivel='+data.nivel,{},{responseType:'text', observe:'response'})
  }
  editarProyectosServicio(id:number, data:any):Observable<any>{

    return this.http.put(this.url+'proyectos/editar/'+id+'?'+'nombreProyecto='+data.nombreProyecto+'&'+
    'fecha='+data.fecha+'&tecnologia='+data.tecnologia+'&comentario='+data.comentarios+'&url='+data.url,{},{responseType:'text', observe:'response'})
  }
  editarHabilidadesServicio(id:number, data:any):Observable<any>{

    return this.http.put(this.url+'habilidades/editar/'+id+'?'+'porcentaje='+data.porcentaje+'&habilidades='+data.habilidades,{},{responseType:'text', observe:'response'})
  }
}
