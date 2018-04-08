import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MaterialType } from '../../models/material-type';

@Component({
  selector: 'app-material-type',
  templateUrl: './material-type.component.html',
  styleUrls: ['./material-type.component.scss']
})
export class MaterialTypeComponent implements OnInit {

  @Input() materialType: MaterialType;

  constructor(
    public dialogRef: MatDialogRef<MaterialTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

}
