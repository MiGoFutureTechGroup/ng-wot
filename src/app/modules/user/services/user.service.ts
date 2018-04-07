import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User, ELEMENT_DATA } from '../models/user';

@Injectable()
export class UserService {

  private users: BehaviorSubject<User[]>;

  constructor() {
    let retrievedUsers: User[] = ELEMENT_DATA;
    this.users = new BehaviorSubject<User[]>(retrievedUsers);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: string | number) {
    let res = this.getUsers().map(users => users.find(user => user.id == id));
    return res;
  }

}
