import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FavoriteStreamTileComponent } from './favorite-stream-tile/favorite-stream-tile.component';
import { StreamTileComponent } from './stream-tile/stream-tile.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule, MatMenuModule, MatSlideToggleModule } from '@angular/material';
import { ProfileStreamTileComponent } from './profile-challenge/profile-challenge-tile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent ,
    FavoriteStreamTileComponent,
    StreamTileComponent,
    ProfileStreamTileComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FavoriteStreamTileComponent,
    StreamTileComponent,
    ProfileStreamTileComponent
  ],
})
export class SharedModule { }
