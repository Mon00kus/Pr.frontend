import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  cambiarPassword: FormGroup;
  loading : boolean = false;

  constructor(private fb : FormBuilder
            , private usuarioService : UsuarioService
            , private toastr : ToastrService
            , private router : Router) {

    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    }, { validator: this.checkPassword })

  }

  ngOnInit(): void {
  }

  checkPassword(group: FormGroup): any {

    const pass = group.controls['nuevaPassword'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true};

  }

  guardarPassword(): void {

    const changePassword : any = {
      passwordAnterior : this.cambiarPassword.value.passwordAnterior,
      nuevaPassword : this.cambiarPassword.value.nuevaPassword
    }
    console.log('Antes de enviar:' + changePassword);

    this.loading = true;
    
    this.usuarioService.changePassword(changePassword).subscribe(data=>{
        this.toastr.info(data.message,'Clave modificada!');
        this.router.navigate(['/dashboard'])
    }, error =>{
      this.loading = false;
      this.cambiarPassword.reset();
      console.log(error);
      this.toastr.error(error.error.message, 'Error!');
    });
    //console.log(changePassword);
    //this.cambiarPassword.reset();
  }
}
