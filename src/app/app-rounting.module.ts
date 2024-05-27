
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BienvenidaComponent } from "./components/inicio/bienvenida/bienvenida.component";
import { RegisterComponent } from "./components/inicio/register/register.component";
import { LoginComponent } from "./components/inicio/login/login.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CuestionariosComponent } from "./components/dashboard/cuestionarios/cuestionarios.component";
import { CambiarPasswordComponent } from "./components/dashboard/cambiar-password/cambiar-password.component";
import { NuevoCuestionarioComponent } from "./components/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component";
import { PasoUnoComponent } from "./components/dashboard/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component";
import { PasoDosComponent } from "./components/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component";
import { CuetionarioComponent } from "./components/dashboard/cuestionarios/cuetionario/cuetionario.component";
import { ListCuestionariosComponent } from "./components/inicio/list-cuestionarios/list-cuestionarios.component";
import { IngresarNombreComponent } from "./components/inicio/list-cuestionarios/ingresar-nombre/ingresar-nombre.component";
import { PreguntaComponent } from "./components/inicio/list-cuestionarios/pregunta/pregunta.component";
import { RespuestaCuestionarioComponent } from "./components/inicio/list-cuestionarios/respuesta-cuestionario/respuesta-cuestionario.component";
import { EstadisticasComponent } from "./components/dashboard/cuestionarios/estadisticas/estadisticas.component";


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, children:[
    { path: '', component: BienvenidaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'listCuestionarios', component: ListCuestionariosComponent },
    { path: 'ingresarNombre', component: IngresarNombreComponent},
    { path: 'pregunta', component: PreguntaComponent},
    { path: 'respuestaCuestionario', component: RespuestaCuestionarioComponent}
  ]},
  { path: 'dashboard', component: DashboardComponent, children:[
    { path: '', component: CuestionariosComponent },
    { path: 'cambiarPassword', component: CambiarPasswordComponent },
    { path: 'verCuestionario/:id', component: CuetionarioComponent},
    { path: 'estadisticas/:id', component: EstadisticasComponent },
    { path: 'nuevoCuestionario', component: NuevoCuestionarioComponent, children:[
        {path: 'pasoUno', component: PasoUnoComponent},
        {path: 'pasoDos', component: PasoDosComponent}
    ]},
  ]},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
