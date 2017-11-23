import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatFormFieldControl, MatDialog } from '@angular/material';

import { Player } from '../../models/player.model';
import { Rating } from '../../models/rating.model';

@Component({
  selector: 'app-player-rating',
  templateUrl: './player-rating.component.html',
  styleUrls: ['./player-rating.component.scss']
})
export class PlayerRatingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() player: Player;

  ngOnInit() {
  }

  closeDialog(){
    this.dialog.closeAll();
  }

}
