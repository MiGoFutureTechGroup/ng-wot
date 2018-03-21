import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { UserDetailComponent } from '../users/user-detail.component';
import { User, EMPTY_USER } from '../../models/user';

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
		let config: MatDialogConfig<User>;
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
}
