import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../overview/user/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthenticationService) {}

  get currentUser(): Observable<string> {
    return this._authService.user$;
  }

  ngOnInit() {
  }

}
