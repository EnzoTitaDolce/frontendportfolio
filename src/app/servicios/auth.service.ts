import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtModel } from '../clases/jwt-model';
import { LoginUsuario } from '../clases/login-usuario';
import { NuevoUsuario } from '../clases/nuevo-usuario';


/*

  Este servicio implemente los métodos para hacer login y crear una nueva cuenta

 */

const cabecera={headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl='https://backendportfolio-production-49b4.up.railway.app/api/auth/login';

               

  constructor(private httpclient: HttpClient) { }

  public login(usuario:LoginUsuario): Observable<JwtModel>{
    return this.httpclient.post<JwtModel>(this.authUrl,usuario,cabecera);
  }
}
