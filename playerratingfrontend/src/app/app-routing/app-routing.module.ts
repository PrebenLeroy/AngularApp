import { PlayerComponent } from '../overview/player/player.component';
import { PlayerRatingComponent } from '../overview/player-rating/player-rating.component';
import { TeamComponent } from '../overview/team/team.component';
import { PlayerProfileComponent } from '../overview/player-profile/player-profile.component';
import { PageNotFoundComponent } from '../overview/page-not-found/page-not-found.component';
import { HomeComponent } from '../overview/home/home.component';
import { LoginComponent } from '../overview/user/login/login.component';
import { LogoutComponent } from '../overview/user/logout/logout.component';
import { RegisterComponent } from '../overview/user/register/register.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatToolbarModule,
  MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../overview/user/auth-guard.service';
import { AuthenticationService } from '../overview/user/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: HomeComponent, pathMatch: 'full' },
  {
    path: 'team',
    canActivate: [AuthGuardService],
    loadChildren: '../overview/team/team.module#TeamModule'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    PlayerRatingComponent,
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
