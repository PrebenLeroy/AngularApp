import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player.model';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() player: Player;

  ngOnInit() {
  }

  closeDialog(): void{
    this.dialog.closeAll();
  }

}
