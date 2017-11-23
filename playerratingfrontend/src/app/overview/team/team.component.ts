import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model';
import { Position } from '../../models/position.model';

import { Component, OnInit } from '@angular/core';

const players: Player[] = [new Player('assets/players/WESLEY-2.jpg', 1, 'Wesley', 'Channels', Position.PG), 
new Player('assets/players/VT-2.jpg', 2, 'Vernon', 'Taylor', Position.SG),
new Player('assets/players/BILL-2.jpg', 4, 'Bill', 'Amis', Position.C),
new Player('assets/players/SAM-2.jpg', 5, 'Sam', 'Hemeleers', Position.PG),
new Player('assets/players/JOHN-2.jpg', 6, 'John', 'Tofi', Position.C),
new Player('assets/players/THEO-2.jpg', 7, 'Theo', 'Beaujean', Position.PG),
new Player('assets/players/SIMON-2.jpg', 8, 'Simon', 'Guesquiere', Position.SG),
new Player('assets/players/OLLIE-2.jpg', 10, 'Olivier', 'Troisfontaine', Position.SF),
new Player('assets/players/SENNE-2.jpg', 11, 'Senne', 'Geukens', Position.SG),
new Player('assets/players/JUSTIN-2.jpg', 13, 'Justin', 'Kohajda', Position.C),
new Player('assets/players/KELLEN-2.jpg', 24, 'Kellen', 'Dunham', Position.SF),
new Player('assets/players/ANDREW-2.jpg', 45, 'Andrew', 'Chrabascz', Position.PF)];

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: Team;

  constructor() {
    this.team = new Team('assets/images/okapi-logo.png', 'Crelan Okapi Aalstar', players, 'Jean-Marc Jaumin', 'Jean Colinet');
  }

  ngOnInit() {
  }

}
