import { Component, OnInit } from '@angular/core';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from '../../../services/cuestionario.service';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})

export class ListCuestionariosComponent implements OnInit{
  loading = false;
  listCuestionarios: Cuestionario[]= [];

  constructor(private cuestionarioService: CuestionarioService
            , private router: Router
            , private respuestaCuestionario: RespuestaCuestionarioService
            ) {}

  ngOnInit(): void {
    this.getListCuetionarios();
  }

  getListCuetionarios(): void {
    this.loading = true;
    this.cuestionarioService.getListCuestionarios().subscribe(data=> {
      this.loading = false;
      this.listCuestionarios = data;
    });
  }

  ingresarNombre(idCuestionario: number): void {
    this.respuestaCuestionario.idCuestionario= idCuestionario;
    this.router.navigate(["/inicio/ingresarNombre"]);
  }

}
