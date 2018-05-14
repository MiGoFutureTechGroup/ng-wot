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
      if (response.status_code == 200) {
        this.autoRedirect();
        this.session.isLoggedIn = true;
      }
    });
    // TODO handle ajax response
  }

  autoRedirect() {
    console.log('Auto-redirect ...');
  }

}
