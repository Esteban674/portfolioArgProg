import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CursosComponent } from './cursos/cursos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'acercade', component: AcercadeComponent},
      { path: 'experiencia', component: ExperienciaComponent},
      { path: 'educacion', component: EducacionComponent},
      { path: 'cursos', component: CursosComponent},
      { path: 'habilidades', component: HabilidadesComponent},
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
