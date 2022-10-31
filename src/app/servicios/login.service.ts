import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login( usuario:any):Observable<any>{
    return this.http.post("https://glacial-thicket-41724.herokuapp.com/api/auth/login",usuario);
    
    
  }

}
