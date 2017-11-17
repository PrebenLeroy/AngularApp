import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, 
  MatListModule, MatDialogModule } from '@angular/material';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    HeaderComponent,
    FooterComponent,
    PlayerProfileComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PlayerProfileComponent]
})
export class AppModule { }
