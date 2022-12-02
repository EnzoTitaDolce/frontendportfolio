import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginUsuario } from "../clases/login-usuario";
import { AuthService } from "../servicios/auth.service";
import { TokenService } from "../servicios/token.service";

/*

En el inicio se comprueba por medio del tokenService si hay almacenado algún token en la sesión. Si lo hay es que el usuario está logueado.
La variable usuario se inicializa con asignan los valores del formulario al hacer login. Si las credenciales son correctas, por medio del 
authService se obtienen los valores del token que devuelve el REST. El tokenService almacena esos valores en la sesión y el router nos 
redirige al home. En el caso de que las credenciales sean erróneas, se devuelve el mensaje de error.
Los booleanos isLogged e isLoginFail se usan en la vista para presentar el formulario y/o el mensaje de error.

*/


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  usuario!: LoginUsuario;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  errorMsg = '';
  dataToken:any;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.usuario = new LoginUsuario(this.form.nombreUsuario, this.form.password);

    this.authService.login(this.usuario).subscribe((data) => (
      this.tokenService.setToken(data.token),
      this.tokenService.setUserName(data.nombreUsuario),
      this.tokenService.setAuthorities(data.authorities),


    /*this.authService.login(this.usuario).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);*/

      this.isLogged = true,
      this.isLoginFail = false,
      this.roles = this.tokenService.getAuthorities(),
      window.location.reload())
    ,
      (err: any) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsg = err.error.message;
      }
    );
    console.table(this.usuario);
    console.table(this.tokenService)
  }

}