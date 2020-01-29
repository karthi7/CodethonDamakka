import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StreamsModule } from './streams/streams.module';
import { HomeScreenComponent } from './home_screen/home_screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    StreamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
