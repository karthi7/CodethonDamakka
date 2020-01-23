import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-stream-tile',
  templateUrl: './favorite-stream-tile.component.html',
  styleUrls: ['./favorite-stream-tile.component.scss']
})
export class FavoriteStreamTileComponent implements OnInit {

  @Input() stream;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTileClick() {
    this.onClick.emit();
  }

}
