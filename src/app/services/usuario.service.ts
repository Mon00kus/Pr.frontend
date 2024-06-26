import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myAppUrl : string ;
  myApiUrl : string ;

  constructor(private http : HttpClient) {

    this.myAppUrl = environment.endPoint ;
    this.myApiUrl = '/api/usuario';
  }
  //localhost:port/api/Usuario/CambiarPassword
  saveUser(usuario:Usuario): Observable<any>{

    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);

  }

  changePassword (changePasswrod : any) : Observable<any>{

    return this.http.put(this.myAppUrl + this.myApiUrl + '/CambiarPassword', changePasswrod);

  }
}
