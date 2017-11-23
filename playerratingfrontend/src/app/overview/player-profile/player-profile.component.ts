import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { Position } from '../../models/position.model';
import { PlayerRatingComponent } from '../player-rating/player-rating.component';

import { MatDialog } from '@angular/material';

const playerTest: Player = new Player('assets/players/VT-2.jpg', 2, 'Vernon', 'Taylor', Position.SG);

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {

player: Player;

  constructor(public dialog: MatDialog) {
    this.player = playerTest;
  }

  /*@Input() player: Player;*/

  ngOnInit() {
  }

  openDialog(player: Player) {
    const playerdialog = this.dialog.open(PlayerRatingComponent, {
      width: '500px'
    });

    playerdialog.componentInstance.player = player;

    playerdialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
