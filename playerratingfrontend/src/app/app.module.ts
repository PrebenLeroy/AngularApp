import { UserModule } from './overview/user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TeamModule } from './overview/team/team.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { PlayerComponent } from './overview/player/player.component';
import { TeamComponent } from './overview/team/team.component';
import { HeaderComponent } from './header/header.component';
import { PlayerProfileComponent } from './overview/player-profile/player-profile.component';
import { PlayerRatingComponent } from './overview/player-rating/player-rating.component';
import { HomeComponent } from './overview/home/home.component';
import { PageNotFoundComponent } from './overview/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    UserModule,
    TeamModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PlayerRatingComponent]
})
export class AppModule { }
