import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConfig } from '../app-route-config';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: RouteConfig.STREAM_ID + '/' + RouteConfig.LIST,
    component: ListComponent
  },
  {
    path: RouteConfig.STREAM_ID + '/' + RouteConfig.CHALLENGE_ID + '/' + RouteConfig.DETAIL,
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }




