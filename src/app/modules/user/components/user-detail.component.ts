import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  activeUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: {activeUser: User}) => {
      this.activeUser = data.activeUser;
    });
  }

  isViewNewUser(): boolean {
    return this.location.isCurrentPathEqualTo('/users/new/user');
  }

  onCancel(): void {
    this.router.navigate(['/users']);
    // TODO
    this.activeUser = null;
  }

  onSubmit(): void {
    console.log('onSubmit');
    // TODO
    this.activeUser = null;
  }

  isViewUsers(): boolean {
    return this.location.isCurrentPathEqualTo('/users');
  }

}
