import { TeamDataService } from '../../services/team-data.service';
import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';
import { PlayerProfileComponent } from '../player-profile/player-profile.component';

import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() public player: Player;

  constructor() { }

  ngOnInit() {
  }

}
