import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { VillasComponent } from './core/villas/villas.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent,
  children: [
    {
      path:'', component: HomeComponent,     
      loadChildren: () => import('../app/core/home/home.module').then(m => m.HomeModule),      
    },   
    { path:'villa', component: VillasComponent},
]
  },];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
