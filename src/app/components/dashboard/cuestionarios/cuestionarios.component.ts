import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit {

  nombreUsuario : string = '';

  constructor(private loginService : LoginService) {

  }

  ngOnInit(): void {
    this.nombreUsuario = this.getNombreUsuario();
  }

  getNombreUsuario () : string{
    return this.loginService.getLocalStorageUsr();
  }

}
