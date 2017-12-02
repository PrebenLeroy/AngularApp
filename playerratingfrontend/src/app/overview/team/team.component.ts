import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model';
import { Position } from '../../models/position.model';

import { Component, OnInit } from '@angular/core';

const players: Player[] = [new Player('https://drive.google.com/uc?id=1ns073HWbIPZ7St1JDBHd9SrrptKvTxAl',
1, 'Wesley', 'Channels', Position.PG),
new Player('https://drive.google.com/uc?id=1DcTkOM4RfRK2GZqnenjgDNESivHqTEMp', 2, 'Vernon', 'Taylor', Position.SG),
new Player('https://drive.google.com/uc?id=1LvhGQEMFEEbosWdoMnCA2HO-RwXexmCf', 4, 'Bill', 'Amis', Position.C),
new Player('https://drive.google.com/uc?id=1l02suJfpm8zfRSqpb7LcvKauDJmnqb2l', 5, 'Sam', 'Hemeleers', Position.PG),
new Player('https://drive.google.com/uc?id=16e8zUtUzncqOuYVQ_VWrOyxhx1_QKtDT', 6, 'John', 'Tofi', Position.C),
new Player('https://drive.google.com/uc?id=1f1_CIqnO0Ccu_-RH5z29MeU8wBpbYgx9', 7, 'Theo', 'Beaujean', Position.PG),
new Player('https://drive.google.com/uc?id=1aCQApv6jF2kMGyJcGFkqmNnKs_WMJfel', 8, 'Simon', 'Guesquiere', Position.SG),
new Player('https://drive.google.com/uc?id=1su4hfsrE_wUjwayzKJ-kDgRDr1lOycgV', 10, 'Olivier', 'Troisfontaine', Position.SF),
new Player('https://drive.google.com/uc?id=1F2uTWyAgxnueOESyUn8g-FFE8OSPHKai', 11, 'Senne', 'Geukens', Position.SG),
new Player('https://drive.google.com/uc?id=1b7a_LKJrZL4HXvtLICaLchQHRSiWEpoe', 13, 'Justin', 'Kohajda', Position.C),
new Player('https://drive.google.com/uc?id=1LV7Hbfychg7A4xf1i-X4Llw1qgHYzCig', 24, 'Kellen', 'Dunham', Position.SF),
new Player('https://drive.google.com/uc?id=1Tr7qBqzD4P7pa7qhJO1GJe1vHf361180', 45, 'Andrew', 'Chrabascz', Position.PF)];

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: Team;

  constructor() {
    this.team = new Team('https://drive.google.com/uc?id=1tJXvlFDaQ9GOAw_EyhGvpnUgLs6YoHxO',
    'Crelan Okapi Aalstar', players, 'Jean-Marc Jaumin', 'Jean Colinet');
  }

  ngOnInit() {
  }

}
