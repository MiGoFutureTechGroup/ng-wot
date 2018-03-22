import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { SessionService } from './services/session.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		LoginComponent,
		JoinComponent
	],
	providers: [
		SessionService
	]
})
export class SessionModule { }
