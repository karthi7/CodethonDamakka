import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [HeaderComponent],
})
export class SharedModule { }
