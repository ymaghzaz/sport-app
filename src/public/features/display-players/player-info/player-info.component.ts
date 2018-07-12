import { Component, OnInit , Input } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  @Input() player :Player;
  constructor() { }

  ngOnInit() {
  }

}
