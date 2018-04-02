import { Component, OnInit } from '@angular/core';

import { Warehouse, ExstockLog } from '../../models/warehouse';
import { User } from '../../models/user';

@Component({
  selector: 'app-exstock',
  templateUrl: './exstock.component.html',
  styleUrls: ['./exstock.component.scss']
})
export class ExstockComponent implements OnInit {
  units = [
    {id: 1, name: 'pcs'},
    {id: 2, name: 'kpcs'},
  ];
  warehouseLogCache: ExstockLog = new ExstockLog();

  constructor() { }

  ngOnInit() {
  }

}
