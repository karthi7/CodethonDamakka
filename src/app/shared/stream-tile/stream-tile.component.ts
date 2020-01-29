import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream-tile',
  templateUrl: './stream-tile.component.html',
  styleUrls: ['./stream-tile.component.scss']
})
export class StreamTileComponent implements OnInit {

  @Input() title = 'Java';

  constructor() { }

  ngOnInit() {
  }

}
