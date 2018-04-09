import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Material } from '../../models/material';
import { MaterialType } from '../../models/material-type';
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

  selectedMaterial: Material;
  selectedMaterialType: MaterialType;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		public dialog: MatDialog,
	) { }

	ngOnInit() {
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

  openDialog(
      fieldName: string,
      dialogModelName: string,
      dialogModelCtorParams: undefined | Array<any>,
      dialogComponentName: string,
      dialogWidth: string = DIALOG_WIDTH,
      dialogHeight: string = DIALOG_HEIGHT,
      dialogConfigDataKey: string,
      callback: undefined,
  ): void {

    if (!this[fieldName]) {
      let obj = this[fieldName] = Object.create(window[dialogModelName].prototype);
      obj.constructor.apply(obj, dialogModelCtorParams);
    }

    let dialogConfig = {
      width: dialogWidth,
      height: dialogHeight,
      data: { },
    };
    dialogConfig.data[dialogConfigDataKey] = this[fieldName];

    let dialogRef = this.dialog.open(window[dialogComponentName], dialogConfig);

    if (dialogRef && callback) {
      dialogRef.afterClosed().subscribe(callback);
    }
  }
}
