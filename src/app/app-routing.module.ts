import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'AppComponent',pathMatch:'full'},
  { 
    path: '',
    loadChildren: () => import('./components/portfolio.module').then( m => m.PortfolioModule)
  },
  {
    path: '**',
    redirectTo: 'acercade'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
