import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from './app-route-config';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: RouteConfig.HOME,
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/' + RouteConfig.HOME,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class AppRoutingModule { }




