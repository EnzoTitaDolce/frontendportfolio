import { Component, OnInit} from '@angular/core';
import { ModalProyectosComponent } from '../modal-proyectos/modal-proyectos.component';
import { RecuperarDatosService } from '../servicios/recuperar-datos.service';
import { ServicioDatosService } from '../servicios/servicio-datos.service';
import { Proyectos } from './proyectos';
import { MatDialog } from '@angular/material/dialog';
import { AgregarService } from '../servicios/agregar.service';
import { EliminarService } from '../servicios/eliminar.service';
import { Router } from '@angular/router';
import { EditarService } from '../servicios/editar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  constructor(private datosBd:RecuperarDatosService, private datos:ServicioDatosService, public dialog:MatDialog,
      private agregar:AgregarService, private eliminar:EliminarService, private router:Router, private editar:EditarService) { }
  misDatosBd:any
  misDatos:any;
  suscripcion!: Subscription;
  nombre = 'Rodriguez Pablo';
  edad = 15;
  sueldos = [1700, 1600, 1900];

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.misDatos=data;
})

    this.getData();
  }

  getData(){

    this.datosBd.getProyectos().subscribe(data=>{

      this.misDatosBd=data
      console.log(this.misDatosBd);
      
    })}

  abrirDialogo(){

    const dialogo1=this.dialog.open(ModalProyectosComponent,{

      data:new Proyectos('','','','','')

    });

    dialogo1.afterClosed().subscribe(data=>{

      if (data!=undefined && data!=null && data!='')
      this.agregarProyectos(data);

    });

  }

  
  abrirDialogoEditar(id:number, nombreProyecto:String, fecha:String, tecnologia:String, comentarios:String, url:String){

    const dialogoEditar=this.dialog.open(ModalProyectosComponent,{
              
            data:{'id':id,'nombreProyecto':nombreProyecto,'fecha':fecha,'tecnologia':tecnologia,'comentarios':comentarios,'url':url}
            
      });
      dialogoEditar.afterClosed().subscribe(data=>{
          
        this.editarProyectos(data.id,data);
        console.log(data);
        this.ngOnInit();
      })

    }
  
  agregarProyectos(valores:any){
    let body = {
      nombreProyecto: valores.nombreProyecto,
      fecha: valores.fecha,
      tecnologia: valores.tecnologia,
      comentarios:valores.comentarios,
      url:valores.url
    }
    this.agregar.agregarProyectos(body).subscribe(response=>{

      console.log(response);

      this.ngOnInit();
    });   
    }
    eliminarProyectos(id:number){

     
        this.eliminar.eliminarProyectos(id)
          .subscribe(response => {
            console.log(response);
            this.ngOnInit();
          
      })    
      

    }

    editarProyectos(id:number, data:any){
      this.editar.editarProyectosServicio(id,data).subscribe(response=>{
        console.log(response);
        this.ngOnInit();
      }
      )

    }

}
function getData() {
  throw new Error('Function not implemented.');
}

