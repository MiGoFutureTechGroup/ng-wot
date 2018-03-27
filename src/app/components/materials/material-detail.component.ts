import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Material } from '../../models/material';

@Component({
	selector: 'app-material-detail',
	templateUrl: './material-detail.component.html',
	styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {

  @Input() material: Material;

  constructor(
    public dialogRef: MatDialogRef<MaterialDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

}
