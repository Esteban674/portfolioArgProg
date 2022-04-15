import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AddexperienceComponent } from './components/forms/addexperience/addexperience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import localeEsp from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AddeducationComponent } from './components/forms/addeducation/addeducation.component';
import { AddcourseComponent } from './components/forms/addcourse/addcourse.component';
import { AddskillComponent } from './components/forms/addskill/addskill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ToastrModule } from 'ngx-toastr';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { FooterComponent } from './shared/footer/footer.component';


registerLocaleData(localeEsp);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    CursosComponent,
    ContactoComponent,
    MenuComponent,
    AddexperienceComponent,
    AddeducationComponent, 
    AddcourseComponent,
    AddskillComponent,
    ProyectosComponent,
    LoginComponent,
    RegistroComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
     {provide: LOCALE_ID, useValue: 'es'},
     interceptorProvider
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
