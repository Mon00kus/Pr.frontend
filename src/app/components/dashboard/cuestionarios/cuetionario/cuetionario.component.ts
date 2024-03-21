import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuestionarioService } from '../../../../services/cuestionario.service';

@Component({
  selector: 'app-cuetionario',
  templateUrl: './cuetionario.component.html',
  styleUrls: ['./cuetionario.component.css']
})

export class CuetionarioComponent implements OnInit {
  idCuestionario : number = 0;
  loading : boolean = false;
  cuestionario : any = {};
  /**
   *
   */
  constructor(private cuestionarioService: CuestionarioService
            , private aRoute : ActivatedRoute) {
     this.idCuestionario= Number( this.aRoute.snapshot.paramMap.get('id') );
  }

  ngOnInit(): void {
    this.getCuestionario();
  }

  getCuestionario(): void {
    this.loading = true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data=> {
      this.loading = false;
      this.cuestionario = data;
    });
  }

}
