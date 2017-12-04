import { TeamDataService } from '../../services/team-data.service';
import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model';
import { Position } from '../../models/position.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TeamDataService]
})
export class HomeComponent implements OnInit {

  _teams: Team[];
  team: Team;

  constructor(private _teamDataService: TeamDataService) {}

  get teams(): Team[]{
    return this._teams;
  }

  ngOnInit() {
    this._teamDataService.teams().subscribe(items => {
      this._teams = items;
      this.team = items[0];
    });
  }

}
