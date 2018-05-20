import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User, ELEMENT_DATA } from '../models/user';
import { Role } from '../models/role';

@Injectable()
export class UserService {

  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private roles: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);

  constructor(
    private http: HttpClient,
  ) {
    this.retrieveUsers((response) => {
      if (response.status_code == 200) {
        let data = response.data;
        let pages = data.pages;
        let pagesize = data.pagesize;
        let users = data.users;

        this.users.next(users);
      }
    });
  }

  retrieveUsers(cb_next, cb_error?, cb_complete?): void {
    this.http.get<any>('/api/users/').subscribe(cb_next, cb_error, cb_complete);
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
