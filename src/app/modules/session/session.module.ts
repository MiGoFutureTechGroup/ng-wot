import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		LoginComponent,
		JoinComponent
	]
})
export class SessionModule { }
