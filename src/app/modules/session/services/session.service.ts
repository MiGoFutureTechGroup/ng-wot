import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private loginState: boolean = false;

	constructor() { }

  set isLoggedIn(loginState: boolean) {
    this.loginState = loginState;
  }

  get isLoggedIn() {
    return this.loginState;
  }

}
