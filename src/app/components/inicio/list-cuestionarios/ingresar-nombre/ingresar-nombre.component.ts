import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-ingresar-nombre',
  templateUrl: './ingresar-nombre.component.html',
  styleUrls: ['./ingresar-nombre.component.css']
})

export class IngresarNombreComponent implements OnInit {
  nombreParticipante = '';
  loading : boolean = false;
  /**
   *
   */
  constructor( private router: Router
            ,  private respuestaCuestionario : RespuestaCuestionarioService ) {
  }

  ngOnInit(): void {
    if( this.respuestaCuestionario.idCuestionario == null || this.respuestaCuestionario.idCuestionario==-1 ){
      this.router.navigate(['/inicio']);
    }
  }

  siguiente(): void {
    this.respuestaCuestionario.nombreParticiante = this.nombreParticipante;
    this.router.navigate(['/inicio/pregunta']);
  }
}
