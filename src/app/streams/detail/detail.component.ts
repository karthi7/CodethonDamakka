import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamModel } from '../../app.model';
import { StreamData } from '../../app-dummy-data';
import { zoomAnimations } from 'src/app/app.animations';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: zoomAnimations
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  streamId: string;
  currentStream: StreamModel;

  ngOnInit() {
    this.streamId = this.route.snapshot.params['streamId'];
    this.currentStream = this.getCurrentStream(this.streamId);
  }

  getCurrentStream(streamId): StreamModel {
    return StreamData.filter(data => {
      return data.id === streamId;
    })[0];
  }

}
