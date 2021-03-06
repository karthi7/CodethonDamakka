import { Component, ViewChild, ElementRef } from '@angular/core';
import { StreamData } from '../app-dummy-data';
import { StreamModel } from '../app.model';
import { Router } from '@angular/router';
import { RouteConfig } from '../app-route-config';
import { zoomAnimations } from '../app.animations';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home_screen.component.html',
  styleUrls: ['./home_screen.component.scss'],
  animations: zoomAnimations
})
export class HomeScreenComponent {
  
  constructor(private router: Router) {}

  videoElement;
  streamData: StreamModel[] = StreamData;
  gridInfo = [
    {
      avatarUrl: '../../assets/images/icons/ic1.svg',
      title: 'Challenges',
      desc: 'Business problem & Coding challenges'
    },{
      avatarUrl: '../../assets/images/icons/ic2.svg',
      title: 'Innovations(ICG)',
      desc: 'Would you like to bid for an innovation'
    },{
      avatarUrl: '../../assets/images/icons/ic3.svg',
      title: 'Discussion Forums',
      desc: 'Are you facing any issues ?'
    }
  ]

  otherStreams = ['Java', 'Marathon', 'Philiosopy', 'Trekking', 'Workshop', 'Tour']

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
