import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioDatosService } from '../servicios/servicio-datos.service';
import { RecuperarDatosService } from '../servicios/recuperar-datos.service';
import { ModalExperienciaComponent } from '../modal-experiencia/modal-experiencia.component';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from './experiencia'; 
import { AgregarService } from '../servicios/agregar.service';
import { EliminarService } from '../servicios/eliminar.service';
import { Route, Router } from '@angular/router';
import { EditarService } from '../servicios/editar.service';
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  misDatos:any;
  misDatosBd:any;
  vector:any[]=[];
  constructor(private datos:ServicioDatosService, private datosBd:RecuperarDatosService, public dialog:MatDialog,
              private agregar:AgregarService, private eliminar:EliminarService, private router:Router, private editar:EditarService) { 
      
  }
  abrirDialogo(){

    const dialogo1=this.dialog.open(ModalExperienciaComponent,{

      data:new Experiencia('','','','',false)

    });

    dialogo1.afterClosed().subscribe(data=>{

      if (data!=undefined && data!=null && data!='')
      this.agregarExperiencia(data);

    });

  }
  abrirDialogoEditar(id:number, fechaFin:String, fechaInicio:String, descripcion:String, nombreEmpresa:String, trabajoActual:boolean){

    const dialogoEditar=this.dialog.open(ModalExperienciaComponent,{
              
            data:{'id':id,'fechaFin':fechaFin,'fechaInicio':fechaInicio,'descripcion':descripcion,'nombreEmpresa':nombreEmpresa,'trabajoActual':trabajoActual}
            
      });
      dialogoEditar.afterClosed().subscribe(data=>{
          
        this.editarExperiencia(data.id,data);
        console.log(data);
      })

    }

  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.misDatos=data;
    })

    this.getData();
    
    }
  getData(){

    this.datosBd.getExperiencia().subscribe(data=>{

      this.misDatosBd=data
      console.log(this.misDatosBd);
      
    })

  }

  agregarExperiencia(valores:any){
    let body = {
      nombreEmpresa: valores.nombreEmpresa,
      descripcion: valores.descripcion,
      fechaInicio: valores.fechaInicio,
      fechaFin:valores.fechaFin,
      trabajoActual:valores.trabajoActual
    }
    this.agregar.agregarExperiencia(body).subscribe(response=>{

        this.ngOnInit();
      })
   }
    eliminarExperiencia(id:number){
        this.eliminar.eliminarExperiencia(id)
          .subscribe(response => {
            console.log(response.status);
      this.ngOnInit();

      })      
      }
      
    
    editarExperiencia(id:number, data:any){
      this.editar.editarExperienciaServicio(id,data).subscribe(response=>{
        console.log(response)
        this.ngOnInit();
      }
      )

    }
    
  }
  

