import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { StreamsRoutingModule } from './streams-routing.module';
import { ChallengeItemComponent } from './challenge-item/challenge-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ListComponent,
    ChallengeItemComponent
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule
  ],
  providers: [],
})
export class StreamsModule { }
