import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
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

    // 浏览器
    BrowserModule,

    // 表单
    FormsModule,

    // Angular Material 界面
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
