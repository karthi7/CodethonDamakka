import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { FavoriteStreamTileComponent } from './favorite-stream-tile/favorite-stream-tile.component';
import { StreamTileComponent } from './stream-tile/stream-tile.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent ,
    FavoriteStreamTileComponent,
    StreamTileComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FavoriteStreamTileComponent,
    StreamTileComponent
  ],
})
export class SharedModule { }
