import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.session.tryLogin(this.username, this.password, this.loginCallback);
  }

  private loginCallback(): void {
    this.autoRedirect();
    this.router.navigate(['/']);
  }

  autoRedirect() {
    console.log('Auto-redirect ...');
  }

}
