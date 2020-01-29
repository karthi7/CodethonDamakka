import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { StreamsRoutingModule } from './streams-routing.module';
import { ChallengeItemComponent } from './challenge-item/challenge-item.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ChallengeItemComponent
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule
  ],
  providers: [],
})
export class StreamsModule { }
