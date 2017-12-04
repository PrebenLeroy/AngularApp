import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatToolbarModule,
    MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { UserModule } from '../user/user.module';
import { AuthGuardService } from '../user/auth-guard.service';

import { PlayerComponent } from '../player/player.component';
import { PlayerProfileComponent } from '../player-profile/player-profile.component';
import { PlayerResolverService } from '../../services/player-resolver.service';
import { TeamDataService } from '../../services/team-data.service';

const routes = [
    { path: 'team', canActivate: [AuthGuardService], component: TeamComponent },
    { path: 'profile/:id', canActivate: [AuthGuardService], component: PlayerProfileComponent, resolve: { player: PlayerResolverService}},
];

@NgModule({
    declarations: [
        TeamComponent,
        PlayerComponent,
        PlayerProfileComponent
    ],
    imports: [
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forChild(routes)
    ],
    providers: [PlayerResolverService,
        TeamDataService],
})
export class TeamModule { }
