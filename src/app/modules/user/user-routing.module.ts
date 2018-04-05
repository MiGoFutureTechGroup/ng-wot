import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailResolver } from './user-detail-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserDetailResolver,
  ],
})
export class UsersRoutingModule { }
