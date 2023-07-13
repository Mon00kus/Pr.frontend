import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loading : boolean = false;
  login : FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr : ToastrService) {
    this.login = this.fb.group({
      usuario : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  showError() {

  }

  ngOnInit(): void {
  }

  log(): void{

    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }

    this.loading = true;

    setTimeout( () => {
      if (usuario.nombreUsuario==='rmoncada' && usuario.password==='admin123'){
        this.login.reset();
        this.router.navigate(['/dashboard']);
      } else {
        //
        this.toastr.error('Ocurrio un error al intentar ingresar','Error happens getting into');
        this.login.reset();
      }

      this.loading = false;

    }, 3000);

    console.log(this.login);

  }
}
