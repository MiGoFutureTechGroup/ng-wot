import { Component, OnInit } from '@angular/core';

import { Material } from '../../models/material';

@Component({
	selector: 'app-material-detail',
	templateUrl: './material-detail.component.html',
	styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {

  activeMaterial = {};

  constructor(
  ) { }

  ngOnInit() {
  }

  onCancel() {
  }

  onSubmit() {
  }

}
