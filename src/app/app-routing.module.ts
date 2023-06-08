import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/layout/home/home.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'outages',
    loadChildren : () => import('./outage/outage.module').then(m => m.OutageModule)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
