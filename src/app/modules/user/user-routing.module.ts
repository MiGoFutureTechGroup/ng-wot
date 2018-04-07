import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// components
import { UserComponent } from './components/user.component';
import { UserDetailComponent } from './components/user-detail.component';
import { RoleComponent } from './components/role.component';
// resolvers
import { UserDetailResolver } from './services/user-detail-resolver.service';
//

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [{
    path: ':id',
    component: UserDetailComponent,
    resolve: {
      activeUser: UserDetailResolver,
    },
  }, {
    path: 'new/user',
    component: UserDetailComponent,
    resolve: {
      activeUser: UserDetailResolver,
    },
  }, {
    path: 'new/role',
    component: RoleComponent,
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule, ],
  providers: [
    UserDetailResolver,
  ],
})
export class UserRoutingModule { }
