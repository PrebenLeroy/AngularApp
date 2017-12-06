import { TeamDataService } from '../../services/team-data.service';
import { AuthenticationService } from '../user/authentication.service';
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
  username: String;
  com: String;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private authService: AuthenticationService,
    private teamDataService: TeamDataService) { }

  @Input() player: Player;

  ngOnInit() {
    this.username = this.authService.getCurrentUser();
    this.rating = this.fb.group({
      overall: [''],
      score: [''],
      freethrow: [''],
      rebound: [''],
      blocks: [''],
      assist: [''],
      steals: [''],
      comment: []
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  onSubmit() {
    if (this.rating.value.comment === undefined) {
      this.com = '';
    } else {
      this.com = this.rating.value.comment;
    }
    const rat = new Rating(this.username, this.rating.value.overall, this.rating.value.score,
      this.rating.value.freethrow, this.rating.value.rebound, this.rating.value.blocks,
      this.rating.value.assist, this.rating.value.steals, this.com);
      console.log(rat);
    this.teamDataService.addRating(rat, this.player).subscribe(val => {
      if (val) {
        this.player.ratings.push(val);
        this.closeDialog();
      }
    });
  }

}
