import { Component, ViewChild, ElementRef } from '@angular/core';
import { StreamData } from '../app-dummy-data';
import { StreamModel } from '../app.model';
import { Router } from '@angular/router';
import { RouteConfig } from '../app-route-config';
import { zoomAnimations } from '../app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: zoomAnimations
})
export class HomeComponent {
  
  constructor(private router: Router) {}

  videoElement;
  streamData: StreamModel[] = StreamData;

  @ViewChild('heroVideo', {static: false})
  heroVideo: ElementRef;

  ngAfterViewInit() {
    setTimeout(time => {
        this.videoElement = document.getElementById('heroVideo');
        this.videoElement.muted = true;
        this.videoElement.play();
    },700);
   }

   onFavStreamClick(stream: StreamModel) {
    this.router.navigate([RouteConfig.STREAMS, stream.id, RouteConfig.LIST]);
   }

}
