
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cuestionario } from '../../../../models/cuestionario';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';


@Component({
  selector: 'app-respuesta-cuestionario',
  templateUrl: './respuesta-cuestionario.component.html',
  styleUrls: ['./respuesta-cuestionario.component.css']
})
export class RespuestaCuestionarioComponent implements OnInit{

  cuestionario : Cuestionario = {
    id : 0,
    nombre : '',
    descripcion: '',
    fechaCreacion : undefined,
    listPreguntas: [],
    usuario: undefined
  };
  respuestaUsuario : number[] = [];
  /**
   *
   */
  constructor(private respuestaCuestionarioService : RespuestaCuestionarioService
            , private router : Router) {

  }

  ngOnInit(): void {
    if (this.respuestaCuestionarioService.idCuestionario===null){
      this.router.navigate(['/inicio']);
    }else{
      this.cuestionario = this.respuestaCuestionarioService.cuestionario!;
      this.respuestaUsuario = this.respuestaCuestionarioService.respuestas;
    }
  }

}
