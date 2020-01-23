import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from '../app-route-config';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: RouteConfig.STREAM_ID + '/' + RouteConfig.LIST,
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }




