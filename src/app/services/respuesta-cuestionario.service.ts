import { Injectable } from '@angular/core';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {
  nombreParticiante: string = "";
  idCuestionario: number = 0;
  respuestas: number[] = [];
  cuestionario: Cuestionario | undefined;
  constructor() {}
}
