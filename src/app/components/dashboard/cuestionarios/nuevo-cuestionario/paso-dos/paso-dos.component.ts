import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { Pregunta } from 'src/app/models/pregunta';
import { Cuestionario } from 'src/app/models/cuestionario';
//Service
import { ToastrService } from 'ngx-toastr';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit{

  tituloCuestionario : string ='';
  descripcionCuestionario : string='';
  listPreguntas : Pregunta[] = [] ;
  loading = false;

  constructor(private cuestionarioS: CuestionarioService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() : void{
    this.tituloCuestionario = this.cuestionarioS.tituloCuestionario;
    this.descripcionCuestionario = this.cuestionarioS.descripcionCuestionario;
  }

  guardarPregunta(pregunta:Pregunta): void {
    this.listPreguntas.push(pregunta);
    console.log(this.listPreguntas);
  }

  eliminarPregunta(index : number ): void{
    this.listPreguntas.splice(index, 1);
  }

  guardarCuestionario(): void {

    let cuestionario: Cuestionario = {
      id : 0,
      nombre: this.tituloCuestionario,
      descripcion: this.descripcionCuestionario,
      listPreguntas: this.listPreguntas,
      usuario: null
      /* fechaCreacion: not asigned */
    };

    console.log(cuestionario);

    this.loading = true;

    // Enviamos cuestionario al back
    this.cuestionarioS.guardarCuestionario(cuestionario).subscribe(data => {
       this.toastr.success('El cuestionario fue registrado con exito', 'Cuestionario Registrado');
       this.router.navigate(['/dashboard']);
       this.loading = false;
    }, error => {
      console.log(error);
      this.toastr.error('Ocurrió un error al guardar el questionario !!!', 'Error');
      this.router.navigate(['/dashboard']);
      this.loading = false;
    });
  }
}
