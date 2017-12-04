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

  public rating: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  @Input() player: Player;

  ngOnInit() {
    this.rating = this.fb.group({
      overall: [''],
      freethrow: [''],
      rebound: [''],
      blocks: [''],
      assist: [''],
      steals: ['']
    });
  }

  closeDialog(){
    this.dialog.closeAll();
  }

}
