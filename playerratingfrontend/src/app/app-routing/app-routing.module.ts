import { PlayerComponent } from '../overview/player/player.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from '../overview/team/team.component';
import { PlayerProfileComponent } from '../overview/player-profile/player-profile.component';
import { PageNotFoundComponent } from '../overview/page-not-found/page-not-found.component';
import { HomeComponent } from '../overview/home/home.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatToolbarModule,
  MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { PlayerRatingComponent } from '../overview/player-rating/player-rating.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'team', component: TeamComponent},
  { path: 'profile', component: PlayerProfileComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  declarations: [
    TeamComponent,
    PlayerComponent,
    HomeComponent,
    PageNotFoundComponent,
    PlayerProfileComponent,
    PlayerRatingComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
