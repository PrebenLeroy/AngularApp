import { Player } from '../models/player.model';
import { Team } from '../models/team.model';
import { Rating } from '../models/rating.model';

import { AuthenticationService } from '../overview/user/authentication.service';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamDataService {

  private _appUrl = 'http://localhost:4200/API';
  private _teams;

  constructor(private http: Http, private auth: AuthenticationService) { }

  teams(): Observable<Team[]> {
    return this.http.get(`${this._appUrl}/teams`, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json().map(team => Team.fromJSON(team)));
  }

  getTeam(id): Observable<Team> {
    return this.http.get(`${this._appUrl}/team/${id}`, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json()).map(item => Team.fromJSON(item));
  }

  players(): Observable<Player[]> {
    return this.http.get(`${this._appUrl}/players`, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json().map(player => Player.fromJSON(player)));
  }

  getPlayer(id): Observable<Player> {
    return this.http.get(`${this._appUrl}/players/${id}`)
      .map(response => response.json().map(player => Player.fromJSON(player)));
  }

}
