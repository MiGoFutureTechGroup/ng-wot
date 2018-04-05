import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { UserType } from '../models/user-type';

@Injectable()
export class UserService {

  private user: User;

  constructor() { }

  get activeUser(): User {
    if (!this.user)
      this.user = new User();

    return this.user;
  }

  set activeUser(user: User) {
    this.user = user;
  }

}
