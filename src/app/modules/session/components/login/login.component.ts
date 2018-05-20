import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private session: SessionService,
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.session.redirectUrl = '/';
    this.session.tryLogin(this.username, this.password);
  }

}
