import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { User } from '../../models/user';
import { UserDetailComponent } from '../users/user-detail.component';
import { UserTypeComponent } from '../users/user-type.component';

const DIALOG_WIDTH: string = '250px';
const DIALOG_HEIGHT: string = '';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
	}

	openNewUserDialog(): void {
		let dialogRef = this.dialog.open(UserDetailComponent, {
			width: DIALOG_WIDTH,
			height: DIALOG_HEIGHT,
			data: {
				user: new User()
			},
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('用户信息修订对话框 已关闭！');
			// TODO 上传信息改动
		})
	}

	openNewUserTypeDialog(): void {
		let dialogRef = this.dialog.open(UserTypeComponent, {

		})
	}
}
