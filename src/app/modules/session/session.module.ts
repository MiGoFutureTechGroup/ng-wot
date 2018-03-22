import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 用户自定义模块
import { MaterialModule } from '../material.module';
// 用户自定义组件
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
// 用户自定义服务
import { SessionService } from './services/session.service';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
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
