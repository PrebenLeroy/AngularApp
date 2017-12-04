import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TeamDataService } from './team-data.service';

import { Player } from '../models/player.model';


@Injectable()
export class PlayerResolverService implements Resolve<Player> {

  constructor(private _teamDataService: TeamDataService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Player> {
    return this._teamDataService.getPlayer(route.params['id']);
  }

}
