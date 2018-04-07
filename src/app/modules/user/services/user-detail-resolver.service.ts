import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class UserDetailResolver implements Resolve<User> {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    let id = route.paramMap.get('id');
    console.log('Resolving user detail', id);

    return this.userService.getUserById(id).take(1).map(user => {
      if (user) {
        return user;
      } else {
        this.router.navigate(['/users/new/user']);
        return null;
      }
    });
  }

}
