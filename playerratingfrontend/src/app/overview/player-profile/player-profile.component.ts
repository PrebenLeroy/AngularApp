import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { Position } from '../../models/position.model';
import { PlayerRatingComponent } from '../player-rating/player-rating.component';

import { MatDialog } from '@angular/material';
import { TeamDataService } from '../../services/team-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss'],
  providers: [TeamDataService]
})
export class PlayerProfileComponent implements OnInit {

  player: Player;

  constructor(private teamDataService: TeamDataService, public dialog: MatDialog, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.data.subscribe(item => {
      this.player = item['player'];
      console.log(this.player);
    });
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
