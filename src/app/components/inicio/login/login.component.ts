import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../../services/login.service';


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
              private toastr : ToastrService,
              private loginService : LoginService) {

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

    this.loginService.login(usuario).subscribe(data =>{        
        this.loginService.setLocalStorageTkn(data);
        this.loading = false;
        this.router.navigate(['/dashboard']);
    }, error => {      
      this.loading = false;
      this.toastr.error('ERROR : ' + error.error.message ,'Ingreso a la App');
      this.login.reset();
    });    

  }
}
