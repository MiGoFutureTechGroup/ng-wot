import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Role } from '../models/role';
import { UserService } from './user.service';

@Injectable()
export class RoleResolver implements Resolve<Role> {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Role> {
    let id = route.paramMap.get('id');

    if (!id) {
      return of(new Role());
    }

    return this.userService.getRoleById(id).take(1).map(role => {
      if (role) {
        return role;
      } else {
        this.router.navigate(['/users/new/role']);
        return new Role();
      }
    });
  }

}
