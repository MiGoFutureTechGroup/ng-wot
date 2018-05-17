import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SessionService {

  private loginState: boolean = false;

	constructor(
    private http: HttpClient,
  ) {
    this.tryLogin();
  }

  set isLoggedIn(loginState: boolean) {
    this.loginState = loginState;
  }

  get isLoggedIn() {
    return this.loginState;
  }

  tryLogin(username?: string, password?: string, callback?: Function): void {
    let url: string = '/api/login/';
    let body: any = {
      'data': {
        'username': username,
        'password': password
      }
    };
    console.log('Login attempt:', url, body);

    if (callback) {
      body = JSON.stringify(body);
      this.http.post<any>(url, body).subscribe((response) => {
        this.isLoggedIn = response.data.login_state;
        if (response.data.login_state) {
          callback();
        }
      });
    } else {
      this.http.get<any>(url).subscribe((response) => {
        this.isLoggedIn = response.data.login_state;
      });
    }
  }

}
