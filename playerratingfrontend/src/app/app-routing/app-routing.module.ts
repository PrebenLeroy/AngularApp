import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from '../overview/team/team.component';
import { PlayerProfileComponent } from '../overview/player-profile/player-profile.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: TeamComponent, pathMatch: 'full'},
  {path: 'profile', component: PlayerProfileComponent},
  { path: '**', component: PageNotFoundComponent}
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
