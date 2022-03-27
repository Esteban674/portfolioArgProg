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

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'acercade', component: AcercadeComponent},
      { path: 'experiencia', component: ExperienciaComponent},
      { path: 'experiencia/agregar', component: AddexperienceComponent},
      { path: 'experiencia/editar/:id', component: AddexperienceComponent},
      { path: 'experiencia/eliminar/:id', component: AddexperienceComponent},
      { path: 'educacion', component: EducacionComponent},
      { path: 'educacion/agregar', component: AddeducationComponent},
      { path: 'educacion/editar/:id', component: AddeducationComponent},
      { path: 'educacion/eliminar/:id', component: AddeducationComponent},
      { path: 'cursos', component: CursosComponent},
      { path: 'cursos/agregar', component: AddcourseComponent},
      { path: 'cursos/editar/:id', component: AddcourseComponent},
      { path: 'cursos/eliminar/:id', component: AddcourseComponent},
      { path: 'habilidades', component: HabilidadesComponent},
      { path: 'habilidades/agregar', component: AddskillComponent},
      { path: 'habilidades/editar/:id', component: AddskillComponent},
      { path: 'habilidades/eliminar/:id', component: AddskillComponent},
      { path: 'contacto', component: ContactoComponent},
      { path: '**', redirectTo: 'acercade'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
