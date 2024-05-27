import { Injectable } from '@angular/core';
import { Cuestionario } from '../models/cuestionario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaCuestionario } from '../models/respuestaCuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {

  myAppUrl : string;
  myApiUrl : string;

  nombreParticiante: string = "";
  idCuestionario: number = 0;
  respuestas: number[] = [];
  cuestionario: Cuestionario | undefined;

  constructor(private http : HttpClient) {
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = '/api/RespuestaCuestionario/';
  }

  guardarRespuestaCuestionario (respuestaCuestionario: RespuestaCuestionario) : Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, respuestaCuestionario);
  }
}
