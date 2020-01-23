import { Component, OnInit, Input } from '@angular/core';
import { ChallengeModel } from 'src/app/app.model';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.scss']
})
export class ChallengeItemComponent implements OnInit {

  constructor() { }

  @Input() item: ChallengeModel;

  ngOnInit() {
  }

}
