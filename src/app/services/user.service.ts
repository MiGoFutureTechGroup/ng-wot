import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class UserService {

  private user: User;

  constructor() { }

  get activeUser(): User {
    return this.user;
  }

  set activeUser(user: User) {
    this.user = user;
  }

}
