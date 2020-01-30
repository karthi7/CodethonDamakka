import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-stream-challenge',
  templateUrl: './profile-challenge-tile.component.html',
  styleUrls: ['./profile-challenge-tile.component.scss']
})
export class ProfileStreamTileComponent implements OnInit {

  @Input() challenge;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTileClick() {
    this.onClick.emit();
  }

}
