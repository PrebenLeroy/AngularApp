import { Team } from '../../models/team.model';
import { TeamDataService } from '../../services/team-data.service';
import { Player } from '../../models/player.model';
import { Position } from '../../models/position.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [TeamDataService]
})
export class TeamComponent implements OnInit {

  _teams: Team[];
  team: Team;

  constructor(private route: ActivatedRoute, private _teamDataService: TeamDataService) { }

  get teams(): Team[] {
    return this._teams;
  }

  ngOnInit() {
    this._teamDataService.teams().subscribe(items => {
      this._teams = items;
      this.team = items[0];
    });
  }

}
