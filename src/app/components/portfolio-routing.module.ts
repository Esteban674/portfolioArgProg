import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddexperienceComponent } from './forms/addexperience/addexperience.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CursosComponent } from './cursos/cursos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { AddeducationComponent } from './forms/addeducation/addeducation.component';
import { AddcourseComponent } from './forms/addcourse/addcourse.component';
import { AddskillComponent } from './forms/addskill/addskill.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from '../auth/login.component';
import { RegistroComponent } from '../auth/registro.component';
import { ProdGuardService as guard } from '../guards/prod-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'acercade', component: AcercadeComponent},
      { path: 'experiencia', component: ExperienciaComponent},
      { path: 'experiencia/agregar', component: AddexperienceComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
      { path: 'experiencia/editar/:id', component: AddexperienceComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'experiencia/eliminar/:id', component: AddexperienceComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
      { path: 'educacion', component: EducacionComponent},
      { path: 'educacion/agregar', component: AddeducationComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'educacion/editar/:id', component: AddeducationComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'educacion/eliminar/:id', component: AddeducationComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'cursos', component: CursosComponent},
      { path: 'cursos/agregar', component: AddcourseComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'cursos/editar/:id', component: AddcourseComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'cursos/eliminar/:id', component: AddcourseComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'habilidades', component: HabilidadesComponent},
      { path: 'habilidades/agregar', component: AddskillComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'habilidades/editar/:id', component: AddskillComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'habilidades/eliminar/:id', component: AddskillComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
      { path: 'proyectos', component: ProyectosComponent},
      { path: 'contacto', component: ContactoComponent},
      { path: 'login', component: LoginComponent},
      { path: 'registro', component: RegistroComponent},
      { path: '**', redirectTo: 'acercade'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
