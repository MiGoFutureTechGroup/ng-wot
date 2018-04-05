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
    this.reset();
  }

  isViewNewUser(): boolean {
    return this.location.isCurrentPathEqualTo('/users/new/user');
  }

  private reset(): void {
    this.activeUser = new User();
  }

  onCancel(): void {
    this.router.navigate(['/users']);
    this.reset();
  }

  onSubmit(): void {
    console.log('onSubmit');
    this.reset();
  }

  isViewUsers(): boolean {
    return this.location.isCurrentPathEqualTo('/users');
  }

}
