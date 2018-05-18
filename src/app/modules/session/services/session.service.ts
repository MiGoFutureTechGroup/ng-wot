import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

  private loginState: boolean = false;
  redirectUrl: string;

	constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.redirectUrl = undefined;
    this.tryLogin();
  }

  set isLoggedIn(loginState: boolean) {
    this.loginState = loginState;
  }

  get isLoggedIn() {
    return this.loginState;
  }

  tryLogin(username?: string, password?: string): void {
    let url: string = '/api/login/';
    let body: any = {
      'data': {
        'username': username,
        'password': password
      }
    };
    console.log('Login attempt:', url, body);

    if (this.redirectUrl) {
      body = JSON.stringify(body);
      this.http.post<any>(url, body).subscribe((response) => {
        this.isLoggedIn = response.data.login_state;
        if (response.data.login_state) {
          this.router.navigate([this.redirectUrl]);
        }
      });
    } else {
      this.http.get<any>(url).subscribe((response) => {
        this.isLoggedIn = response.data.login_state;
      });
    }
  }

}
