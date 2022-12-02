import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioDatosService } from '../servicios/servicio-datos.service';
import { RecuperarDatosService } from '../servicios/recuperar-datos.service';
import { ModalHabilidadesComponent } from '../modal-habilidades/modal-habilidades.component';
import { MatDialog } from '@angular/material/dialog';
import { Habilidades } from './habilidades'; 
import { AgregarService } from '../servicios/agregar.service';
import { EliminarService } from '../servicios/eliminar.service';
import { Route, Router } from '@angular/router';
import { EditarService } from '../servicios/editar.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor(private datos:ServicioDatosService, private datosBd:RecuperarDatosService, public dialog:MatDialog,
    private agregar:AgregarService, private eliminar:EliminarService, private router:Router, private editar:EditarService) { }
  misDatosBd:any
  misDatos:any;
  ngOnInit(): void {

    this.datos.obtenerDatos().subscribe(data =>{
      this.misDatos=data;
})

    this.cargarHabilidades();

  
  }

  cargarHabilidades(){

    this.datosBd.getHabilidades().subscribe(data=>{

      this.misDatosBd=data
      console.log(this.misDatosBd)
    })

  }

  abrirDialogo(){

    const dialogo1=this.dialog.open(ModalHabilidadesComponent,{

      data:new Habilidades('',0)

    });

    dialogo1.afterClosed().subscribe(data=>{

      if (data!=undefined && data!=null && data!='')
      this.agregarHabilidades(data);

    });

  }
  agregarHabilidades(valores:any){
    let body = {
      habilidades: valores.habilidades,
      porcentaje:valores.porcentaje
    }
    this.agregar.agregarHabilidades(body).subscribe(response=>{
      console.log(response);
      this.ngOnInit();
    });

  }
  eliminarHabilidades(id:number){

     
    this.eliminar.eliminarHabilidades(id)
      .subscribe(response => {
        console.log(response);
      this.ngOnInit();
  })
}

editarHabilidades(id:number, data:any){
  this.editar.editarHabilidadesServicio(id,data).subscribe(response=>{
    console.log(response)
    this.ngOnInit();
  }
  )  
}
abrirDialogoEditar(id:number, habilidades:String, porcentaje:number){

  const dialogoEditar=this.dialog.open(ModalHabilidadesComponent,{
            
          data:{'id':id,'habilidades':habilidades,'porcentaje':porcentaje}
          
    });
    dialogoEditar.afterClosed().subscribe(data=>{
        
      this.editarHabilidades(data.id,data);
      console.log(data);
    })

  }

}
