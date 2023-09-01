import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Cuestionario } from '../models/cuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  tituloCuestionario: string='';
  descripcionCuestionario: string='';
  myAppUrl : string ;
  myApiUrl : string ;

  constructor(private http: HttpClient) { 

    this.myAppUrl = environment.endPoint;
    this.myApiUrl = environment.myApiUrlCue;
  }

  guardarCuestionario(cuestionario: Cuestionario) : Observable<any>{
    return this.http.post(this.myApiUrl + this.myApiUrl, cuestionario)
  }
}
