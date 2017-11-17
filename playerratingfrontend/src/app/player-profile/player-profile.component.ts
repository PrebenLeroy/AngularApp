import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  constructor() { }

  @Input() player: Player;

  ngOnInit() {
  }

}
