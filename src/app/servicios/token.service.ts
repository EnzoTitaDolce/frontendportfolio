import { Injectable } from '@angular/core';

/*

  Este servicio es el encargado de generar los tokens y obtener el nombre de usuario y los privilegios
  Las constantes del servicio son las claves harán referencia a los valores de la cabecera.
  Los métodos obtienen y asignan los valores del token, los privilegios y el nombre de usuario.
  Se hace siempre a partir de window.sessionStorage -que, como se ve en su propio nombre, devuelve los valores almacenados en la sesión-.
  Para cerrar la sesión simplemente lo vaciamos.

 */
  const TOKEN_KEY = 'AuthToken';
  const USERNAME_KEY = 'AuthUserName';
  const AUTHORITIES_KEY = 'AutAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles:Array<string>=[];

  constructor() { }

  public setToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken():string{
    return sessionStorage.getItem(TOKEN_KEY)!;
  }
  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
 
}
