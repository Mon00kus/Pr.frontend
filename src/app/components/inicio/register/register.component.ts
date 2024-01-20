import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register : FormGroup;

  loading = false;

  constructor(private fb: FormBuilder
            , private usuarioService : UsuarioService
            , private router : Router
            , private toastr : ToastrService) {
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword });
  }

  ngOnInit(): void {
  }

  registrarUsuario(): void{
    console.log(this.register);

    const usuario: Usuario = {
      nombreUsuario : this.register.value.usuario,
      password : this.register.value.password
    }
    this.loading = true;
    this.usuarioService.saveUser(usuario).subscribe (data => {

      console.log(data);
      this.toastr.success('Usuario ' + usuario.nombreUsuario  + ' registrado exitosamente', 'Usuario registrado');
      this.router.navigate(['/inicio/login']);
      this.loading = false;

    }, error =>{

      console.log(error);
      this.loading = false;
      this.register.reset();
      this.toastr.error(error.error.message, 'Error al registrar el usuario!!!');
    });
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true};
  }

}
