import { Component, OnInit } from '@angular/core';
import { ServicioDatosService } from '../servicios/servicio-datos.service';
import { RecuperarDatosService } from '../servicios/recuperar-datos.service';
import { ModalEducacionComponent } from '../modal-educacion/modal-educacion.component';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from './educacion'; 
import { AgregarService } from '../servicios/agregar.service';
import { EliminarService } from '../servicios/eliminar.service';
import { Route, Router } from '@angular/router';
import { EditarService } from '../servicios/editar.service';
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  misDatos:any;
  misDatosBd:any;
  constructor(private datos:ServicioDatosService, private datosBd:RecuperarDatosService, public dialog:MatDialog,
              private agregar:AgregarService, private eliminar:EliminarService, private router:Router, private editar:EditarService) { }

  ngOnInit(): void {

    this.datos.obtenerDatos().subscribe(data =>{
            this.misDatos=data;
    })
    this.datosBd.getEducacion().subscribe(data=>{

      this.misDatosBd=data
      console.log(this.misDatosBd)
    });
    }
  abrirDialogo(){

    const dialogo1=this.dialog.open(ModalEducacionComponent,{
      data:new Educacion('','','','','')
    });
    dialogo1.afterClosed().subscribe(data=>{
      if (data!=undefined && data!=null && data!='')
      this.agregarEducacion(data);
    });

  }

  
  abrirDialogoEditar(id:number, carrera:String, institucion:String, anioFin:String, anioInicio:String, nivel:String){

    const dialogoEditar=this.dialog.open(ModalEducacionComponent,{
              
            data:{'id':id,'carrera':carrera,'institucion':institucion,'anioFin':anioFin,'anioInicio':anioInicio,'nivel':nivel}
            
      });
      dialogoEditar.afterClosed().subscribe(data=>{
          
        this.editarEducacion(data.id,data);
        console.log(data);
      })

    }

  
  
    
  getData(){

    this.datosBd.getEducacion().subscribe(data=>{

      this.misDatosBd=data
      console.log(this.misDatosBd);
      
    })}

  

  agregarEducacion(valores:any){
    let body = {
      institucion: valores.institucion,
      carrera: valores.carrera,
      nivel: valores.nivel,
      anioFin:valores.anioFin,
      anioInicio:valores.anioInicio
    }
    this.agregar.agregarEducacion(body).subscribe(response=>{

      console.log(response);
      this.ngOnInit();
      

    });
    
      
    }
    eliminarEducacion(id:number){
        this.eliminar.eliminarEducacion(id)
          .subscribe(response => {
            console.log(response);
            this.ngOnInit();
      }      
      )
    }

    editarEducacion(id:number, data:any){
      this.editar.editarEducacionServicio(id,data).subscribe(response=>{
        console.log(response)
        this.ngOnInit();
      }
      )

    }
    

}
