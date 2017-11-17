import { Player } from '../models/player.model';
import { Team } from '../models/team.model';
import { PlayerProfileComponent } from '../player-profile/player-profile.component';

import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showDialog(player: Player): void {

    const playerdialog = this.dialog.open(PlayerProfileComponent, {
      width: '500px'
    });

    playerdialog.componentInstance.player = player;

    playerdialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
