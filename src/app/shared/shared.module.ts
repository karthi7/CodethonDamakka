import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { FavoriteStreamTileComponent } from './favorite-stream-tile/favorite-stream-tile.component';
import { StreamTileComponent } from './stream-tile/stream-tile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FavoriteStreamTileComponent,
    StreamTileComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    HeaderComponent,
    FavoriteStreamTileComponent,
    StreamTileComponent
  ],
})
export class SharedModule { }
