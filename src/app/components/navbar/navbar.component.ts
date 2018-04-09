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

}
