import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from '../overview/team/team.component';
import { PlayerProfileComponent } from '../overview/player-profile/player-profile.component';

const appRoutes: Routes = [
  {path: '', component: TeamComponent},
  {path: 'profile', component: PlayerProfileComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
