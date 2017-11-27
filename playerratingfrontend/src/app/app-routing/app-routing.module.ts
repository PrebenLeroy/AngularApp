import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from '../overview/team/team.component';
import { PlayerProfileComponent } from '../overview/player-profile/player-profile.component';

const appRoutes: Routes = [
  {path: '', component: TeamComponent, pathMatch: 'full'},
  {path: 'profile/:id', component: PlayerProfileComponent},
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
