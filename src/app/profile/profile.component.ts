import { Component, ViewChild, ElementRef } from '@angular/core';
import { StreamData, ProfileDetails } from '../app-dummy-data';
import { StreamModel } from '../app.model';
import { Router } from '@angular/router';
import { RouteConfig } from '../app-route-config';
import { zoomAnimations } from '../app.animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: zoomAnimations
})
export class ProfileComponent {

  activeTab = 'active';
  tabIds = ['active','completed','favourite','monetize']
  tabDetails = [{title:'Active Challenges', isSelected:true, id:'active'},{title:'Completed Challenges', isSelected:false, id:'completed'},{title:'Favourite Challenges', isSelected:false, id:'favourite'},{title:'Monetization', isSelected:false, id:'monetize'}]
  details = {
    active: ProfileDetails.activeChallenge,
    completed: ProfileDetails.completedChallenge,
    favourite: ProfileDetails.favouriteChallenge,
    monetize: []
  }

  constructor(private router: Router) {}

  onTabSelect(index) {
    this.tabDetails.map(item => item.isSelected=false);
    this.tabDetails[index].isSelected = true;
    this.activeTab = this.tabDetails[index].id;
  }

}
