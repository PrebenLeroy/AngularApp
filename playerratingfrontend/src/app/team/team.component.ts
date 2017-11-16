import { Team } from '../models/team.model';
import { Player } from '../models/player.model';
import { Position } from '../models/position.model';

import { Component, OnInit } from '@angular/core';

const players: Player[] = [new Player(1, 'Wesley', 'Channels', Position.PG), new Player(2, 'Vernon', 'Taylor', Position.SG),
new Player(4, 'Bill', 'Amis', Position.C), new Player(5, 'Sam', 'Hemeleers', Position.PG), new Player(6, 'John', 'Tofi', Position.C),
new Player(7, 'Theo', 'Beaujean', Position.PG), new Player(8, 'Simon', 'Guesquiere', Position.SG),
new Player(10, 'Olivier', 'Troisfontaine', Position.SF), new Player(11, 'Senne', 'Geukens', Position.SG),
new Player(13, 'Justin', 'Kohajda', Position.C), new Player(24, 'Kellen', 'Dunham', Position.SF),
new Player(45, 'Andrew', 'Chrabascz', Position.PF)];

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Team;

  constructor() {
    this.team = new Team('Crelan Okapi Aalstar', players, 'Jean-Marc Jaumin', 'Jean Colinet');
  }

  ngOnInit() {
  }

}
