import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../models/user';
import { UserType } from '../../models/user-type';
import { Material } from '../../models/material';
import { MaterialType } from '../../models/material-type';
import { UserDetailComponent } from '../users/user-detail.component';
import { UserTypeComponent } from '../users/user-type.component';
import { MaterialDetailComponent } from '../materials/material-detail.component';
import { MaterialTypeComponent } from '../materials/material-type.component';


const DIALOG_WIDTH: string = '250px';
const DIALOG_HEIGHT: string = '';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	selectedUser: User;
	selectedUserType: UserType;
  selectedMaterial: Material;
  selectedMaterialType: MaterialType;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		public dialog: MatDialog,
	) { }

	ngOnInit() {
	}

	openNewUserDialog(): void {
		if (!this.selectedUser) {
			this.selectedUser = new User();
		}
		let dialogRef = this.dialog.open(UserDetailComponent, {
			width: DIALOG_WIDTH,
			height: DIALOG_HEIGHT,
			data: {
				user: this.selectedUser
			},
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('用户信息修订对话框 已关闭！');
			// TODO 上传信息改动
		});
	}

	openNewUserTypeDialog(): void {
		if (!this.selectedUserType) {
			this.selectedUserType = new UserType();
		}
		let dialogRef = this.dialog.open(UserTypeComponent, {
			width: DIALOG_WIDTH,
			height: DIALOG_HEIGHT,
			data: {
				type: this.selectedUserType
			},
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('用户类型修订对话框 已关闭！');
			// TODO 上传信息改动
		});
	}

	openNewMaterialDialog(): void {
    if (!this.selectedMaterial) {
      this.selectedMaterial = new Material();
    }
    let dialogRef = this.dialog.open(MaterialDetailComponent, {
      width: DIALOG_WIDTH,
      height: DIALOG_HEIGHT,
      data: {
        material: this.selectedMaterial
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('料号信息修订对话框 已关闭！');
      // TODO 上传信息改动
    });
	}

	openNewMaterialTypeDialog(): void {
    if (!this.selectedMaterialType) {
      this.selectedMaterialType = new MaterialType();
    }
    let dialogRef = this.dialog.open(MaterialTypeComponent, {
      width: DIALOG_WIDTH,
      height: DIALOG_HEIGHT,
      data: {
        materialType: this.selectedMaterialType
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('料号类型修订对话框 已关闭！');
      // TODO 上传信息改动
    });
	}
}
