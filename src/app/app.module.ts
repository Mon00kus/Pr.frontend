import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Modules
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-rounting.module';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Interceptors
import { AddTokenInterceptor } from '../app/helpers/add-token.interceptor'

//Components
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NuevoCuestionarioComponent} from './components/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './components/dashboard/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component'


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    BienvenidaComponent,
    RegisterComponent,
    DashboardComponent,
    CuestionariosComponent,
    NavbarComponent,
    CambiarPasswordComponent,
    LoadingComponent,
    NuevoCuestionarioComponent,
    PasoUnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
