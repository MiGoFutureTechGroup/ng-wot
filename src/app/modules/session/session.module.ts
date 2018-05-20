import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// modules
import { MaterialModule } from '../material.module';
// components
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { LogoutComponent } from './components/logout/logout.component';
// services
import { SessionService } from './services/session.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    LoginComponent,
    JoinComponent,
    LogoutComponent,
  ],
  providers: [
    SessionService,
  ]
})
export class SessionModule { }
