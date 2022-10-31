import { Token } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServicioDatosService } from './servicios/servicio-datos.service';
import { TokenService } from './servicios/token.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*

Hay que implementar la interfaz onInit y crear un constructor, en el que se inyecta un TokenService y un Router.

En el onInit se comprueba si hay un token en el almacenamiento de sesión. En caso afirmativo el booleano isLogin será true y se obtiene el rol
del usuario. Más adelante lo utilizaremos para mostrar el enlace al panel de usuario o el enlace al panel de administrador.

Por último se implementa el método para el cierre de sesión, logOut().

 */

export class AppComponent implements OnInit{
  isLogin = false;
  roles!: string[];
  authority!: string;
  misDatos:any;
  constructor(private datos:ServicioDatosService, private tokenService:TokenService, private router:Router){

    //Aquí inicializo variables

  }
  title = 'Portfolio Tita Dolce, Enzo G.';
  ngOnInit():void{
    this.datos.obtenerDatos().subscribe(data=>{
      this.misDatos=data;
    })

   if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.roles = [];
      this.roles = this.tokenService.getAuthorities();
      this.roles.every(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
  logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['login']);
  }
}

