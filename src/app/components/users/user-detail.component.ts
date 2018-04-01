import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  activeUser: User = new User();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  isViewNewUser(): boolean {
    return this.location.isCurrentPathEqualTo('/users/new/user');
  }

  onCancel(): void {
    this.location.go('/users');
  }

  onSubmit(): void {
    console.log('onSubmit');
  }

  isViewUsers(): boolean {
    return this.location.isCurrentPathEqualTo('/users');
  }

}
