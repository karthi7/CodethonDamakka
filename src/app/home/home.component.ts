import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor() {}

  videoElement;

  @ViewChild('heroVideo', {static: false})
  heroVideo: ElementRef;

  ngAfterViewInit() {
    setTimeout(time => {
        this.videoElement = document.getElementById('heroVideo');
        this.videoElement.muted = true;
        this.videoElement.play();
    },500);
   }

}
