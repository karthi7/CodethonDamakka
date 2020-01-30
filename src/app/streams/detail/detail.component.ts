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
  tabDetails = [{title:'Problem', isSelected:true},{title:'Submissions', isSelected:false},{title:'Leaderboard', isSelected:false},{title:'Disclosure', isSelected:false},{title:'Editorial', isSelected:false}]

  ngOnInit() {
    this.streamId = this.route.snapshot.params['streamId'];
    this.currentStream = this.getCurrentStream(this.streamId);
  }

  onTabSelect(index) {
    this.tabDetails.map(item => item.isSelected=false);
    this.tabDetails[index].isSelected = true;
  }

  getCurrentStream(streamId): StreamModel {
    return StreamData.filter(data => {
      return data.id === streamId;
    })[0];
  }

}
