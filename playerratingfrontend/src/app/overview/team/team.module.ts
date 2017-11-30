import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatToolbarModule,
    MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { UserModule } from '../user/user.module';
import { AuthGuardService } from '../user/auth-guard.service';

import { PlayerComponent } from '../player/player.component';
import { PlayerProfileComponent } from '../player-profile/player-profile.component';

const routes = [
    { path: 'team', canActivate: [AuthGuardService], component: TeamComponent },
    { path: 'profile/:id', canActivate: [AuthGuardService], component: PlayerProfileComponent },
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
    providers: [],
})
export class TeamModule { }
