import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl : string ;
  myApiUrl : string ;

  constructor(private http : HttpClient) {
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = environment.myApiUrllog;
  }

  login(usuario : Usuario) : Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl, usuario);
  }

  setLocalStorageUsr( data : any ) : void{
    localStorage.setItem('nombreUsuario', data.nombreUsuario);
  }

  getLocalStorageUsr() : string{
    var nomUsr = localStorage.getItem('nombreUsuario');
    if (nomUsr == null) return 'No existe Info';
    return nomUsr;
  }

  removeLocalStorageUsr() : void{
    localStorage.removeItem('nombreUsuario');
  }

  getLocalStorageTkn(): string{
    var tkn = localStorage.getItem('token');
    if (tkn==null) return 'No existe Token';
    return tkn;
  }

  getLocalStorageTknDecoded() : any {
    const helper = new JwtHelperService();
    var tkn = localStorage.getItem('token');
    tkn = tkn ===  null ? '' : tkn;
    const decodeToken = helper.decodeToken(tkn);
    return decodeToken;
  }

  setLocalStorageTkn( data : any ) : void{
    localStorage.setItem('token', data.token);
  }

  removeLocalStorageTkn(): void {
    localStorage.removeItem('token');
  }
}
