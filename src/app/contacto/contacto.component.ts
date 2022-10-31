import { Component, OnInit } from '@angular/core';
import { ServicioDatosService } from '../servicios/servicio-datos.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
misDatos:any;
  constructor(private datos:ServicioDatosService) { }

  ngOnInit(): void {

    this.datos.obtenerDatos().subscribe(data=>{
      this.misDatos=data;
    })

  }

}
