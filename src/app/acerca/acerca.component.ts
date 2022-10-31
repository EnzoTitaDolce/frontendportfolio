import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioDatosService } from '../servicios/servicio-datos.service';



@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})

export class AcercaComponent implements OnInit {
  misDatos:any;
  misDatosBd:any;
  constructor(private datos:ServicioDatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.misDatos=data;
      console.log(data)
    });
  

}

}
