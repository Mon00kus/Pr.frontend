import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { Pregunta } from 'src/app/models/pregunta';
import { RespuestaCuestionarioDetalle } from 'src/app/models/respuestaCuestionarioDetalle';
import { RespuestaCuestionario } from 'src/app/models/respuestaCuestionario';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  idCuestionario : number = 0;
  listPreguntas : Pregunta[] = [];
  loading : boolean = false;
  rtaConfirmada = false;
  opcionSeleccionada: any;
  index = 0;
  idRespuestaSeleccionada: number = 0;

  listRespuestaDetalle : RespuestaCuestionarioDetalle[] = [];

  /**
   *
   */
  constructor( private router: Router
             , private respuestaCuestionarioService : RespuestaCuestionarioService
             , private cuestionarioService : CuestionarioService ) {  }

  ngOnInit(): void {
    this.idCuestionario = this.respuestaCuestionarioService.idCuestionario;
    if (this.idCuestionario == null){
      this.router.navigate(['/inicio']);
      return;
    }
    this.getCuestionario();
    this.respuestaCuestionarioService.respuestas = [];
  }

  getCuestionario(){
    this.loading = true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data=> {
      this.listPreguntas = data.listPreguntas;
      this.loading = false;
      this.respuestaCuestionarioService.cuestionario = data;
    });
  }

  obtenerPregunta(): string {
    return this.listPreguntas[this.index].descripcion;
  }

  getIndex(): number {
    return this.index;
  }

  respuestaSeleccionada(respuesta: any, idRespuesta: number): void{
    this.opcionSeleccionada = respuesta;
    this.rtaConfirmada = true;
    this.idRespuestaSeleccionada = idRespuesta;
  }

  AddClassOption(respuesta: any): string | undefined {
    if (respuesta === this.opcionSeleccionada){
      return 'active text-light';
    }
    return "none";
  }

  siguiente(): void {
    this.respuestaCuestionarioService.respuestas.push(this.idRespuestaSeleccionada);
    //Creamos un objeto  RespuestaDetalle
    const detalleRespuesta : RespuestaCuestionarioDetalle = {
      respuestaId : this.idRespuestaSeleccionada
    };

    // Agregamos objeto al array
    this.listRespuestaDetalle.push(detalleRespuesta);

    this.rtaConfirmada = false;
    this.index++;
    this.idRespuestaSeleccionada = -1;
    if (this.index === this.listPreguntas.length) {
      //this.router.navigate(['/inicio/respuestaCuestionario']);
      this.guardarRespuestaCuestionario();
    }
  }

  guardarRespuestaCuestionario() : void {
    const rtaCuestionario : RespuestaCuestionario = {
      cuestionarioId : this.respuestaCuestionarioService.idCuestionario,
      nombreParticipante : this.respuestaCuestionarioService.nombreParticiante,
      ListRespuestaCuestionarioDetalle : this.listRespuestaDetalle
    }
    this.loading = true;
    this.respuestaCuestionarioService.guardarRespuestaCuestionario(rtaCuestionario).subscribe(data => {
      this.loading = false;
      this.router.navigate(['/inicio/respuestaCuestionario']);
    }, error =>{
      this.loading = false;
      console.log(error);
    });
  }
}
