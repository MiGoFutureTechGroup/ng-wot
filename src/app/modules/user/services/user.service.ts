import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User, ELEMENT_DATA } from '../models/user';
import { Role } from '../models/role';

@Injectable()
export class UserService {

  private users: BehaviorSubject<User[]>;
  private roles: BehaviorSubject<Role[]>;

  constructor() {
    let retrievedUsers: User[] = ELEMENT_DATA;
    this.users = new BehaviorSubject<User[]>(retrievedUsers);
    this.roles = new BehaviorSubject<Role[]>([]);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: string | number) {
    return this.getUsers().map(users => users.find(user => user.id == id));
  }

  getRoles() {
    return this.roles;
  }

  getRoleById(id: string | number) {
    return this.getRoles().map(roles => roles.find(role => role.id == id));
  }

}
