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
// services
import { SessionService } from './services/session.service';
import { AuthGuard } from './guards/auth.guard';

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
  ],
  providers: [
    SessionService,
    AuthGuard,
  ]
})
export class SessionModule { }
