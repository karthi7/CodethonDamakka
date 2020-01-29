import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StreamModel, Contributors } from '../../app.model';
import { StreamData, ContributorList } from '../../app-dummy-data';
import { zoomAnimations } from 'src/app/app.animations';
import { RouteConfig } from 'src/app/app-route-config';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: zoomAnimations
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  streamId: string;
  currentStream: StreamModel;
  contributors: Contributors[];

  ngOnInit() {
    this.streamId = this.route.snapshot.params['streamId'];
    this.currentStream = this.getCurrentStream(this.streamId);
    this.contributors = ContributorList;
  }

  getCurrentStream(streamId): StreamModel {
    return StreamData.filter(data => {
      return data.id === streamId;
    })[0];
  }

  launchChallenge(challenge) {
    this.router.navigate(['../', challenge.id , RouteConfig.DETAIL], {relativeTo: this.route});
  }

}
