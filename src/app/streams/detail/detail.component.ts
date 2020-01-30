import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamModel, ChallengeModel } from '../../app.model';
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
  challengeId: string;
  currentStream: StreamModel;
  currentChallenge;
  tabDetails = [{title:'Problem', isSelected:true},{title:'Submissions', isSelected:false},{title:'Leaderboard', isSelected:false},{title:'Disclosure', isSelected:false},{title:'Editorial', isSelected:false}]

  ngOnInit() {
    this.streamId = this.route.snapshot.params['streamId'];
    this.challengeId = this.route.snapshot.params['challengeId'];
    this.currentStream = this.getCurrentStream(this.streamId);
    this.currentChallenge = this.getCurrentChallenge(this.currentStream, this.challengeId);
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

  getCurrentChallenge(stream: StreamModel, challengeId) {
    let challenge = stream.challenges.filter(challenge => {
      return challenge.id === challengeId
    });

    return challenge && challenge.length ? challenge[0] : null;
  }

}
