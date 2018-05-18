import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    private http: HttpClient,
    private session: SessionService,
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.session.redirectUrl = '/';
    this.session.tryLogin(this.username, this.password);
  }

}
