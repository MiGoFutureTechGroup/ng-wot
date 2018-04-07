import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Role } from '../models/role';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-type',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  activeRole: Role;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {activeRole: Role}) => {
      this.activeRole = data.activeRole;
    });
  }

  isViewNewRole(): boolean {
    return this.location.isCurrentPathEqualTo('/users/new/role');
  }

  onCancel() {
  }

  onSubmit() {}

}
