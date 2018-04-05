import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// router
import { UserRoutingModule } from './user-routing.module';
// modules
import { MaterialModule } from '../material.module';
// components
import { UserComponent } from './components/user.component';
import { UserDetailComponent } from './components/user-detail.component';
import { RoleComponent } from './components/role.component';
// services
import { UserService } from './services/user.service';
//

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    UserComponent,
    UserDetailComponent,
    RoleComponent,
  ],
  entryComponents: [],
  providers: [
    UserService,
  ],
})
export class UserModule { }
