import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../../../services/login.service';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { Cuestionario } from 'src/app/models/cuestionario';


@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit {

  nombreUsuario : string = '';
  listCuestionarios: Cuestionario[] = [];
  loading = false;

  constructor(private loginService : LoginService,
              private cuestionarioService : CuestionarioService,
              private toastr : ToastrService) {

  }

  ngOnInit(): void {
    this.getNombreUsuario();
    this.getCuestionarios();
  }

  getNombreUsuario () : void {
     this.nombreUsuario = this.loginService.getLocalStorageTknDecoded().sub;
  }

  getCuestionarios () : void {
    this.loading = true;
    this.cuestionarioService.getListCuestionarioByUser().subscribe(data=>{
      this.listCuestionarios = data;
      this.loading = false;
    }, error => {
      console.error(error);
    });
  }

  eliminarCuestionario(idCuestionario: number|undefined): void {
    if (confirm('Eliminar el cuestionario?')){
      this.loading = true;
      this.cuestionarioService.deleteCuestionario(idCuestionario).subscribe(data =>{
        this.loading = false;
        this.toastr.success('Cuestionario eliminado con exito!', 'Registro eliminado');
        this.getCuestionarios();
      }, error => {
        this.loading = false;
        this.toastr.error('Ocurrio un error al eliminar cuestionario...', 'Error');
      });
    }
  }

}
