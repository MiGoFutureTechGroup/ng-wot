import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../models/user';

@Injectable()
export class UserService implements OnInit {

  private user: User;
  private users: BehaviorSubject<User[]>;

  constructor() { }

  ngOnInit() {
    let retrievedUsers: User[] = [];
    this.users = new BehaviorSubject<User[]>(retrievedUsers);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: string | number) {
    return this.getUsers().map(users => users.find(user => user.id == id));
  }

}
