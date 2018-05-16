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
    let url: string = '/api/login/';
    let body: any = {
      'data': {
        'username': this.username,
        'password': this.password
      }
    };
    console.log('Login attempt:', url, body);

    body = JSON.stringify(body);
    this.http.post<any>(url, body).subscribe((response) => {
      if (response.data.login_state) {
        this.autoRedirect();
        this.session.isLoggedIn = true;
        this.router.navigate(['/']);
      }
    });
  }

  autoRedirect() {
    console.log('Auto-redirect ...');
  }

}
