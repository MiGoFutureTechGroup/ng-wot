import { Component, OnInit } from '@angular/core';

import { Warehouse, AbstractLog } from '../../models/warehouse';
import { User } from '../../models/user';

@Component({
  selector: 'app-warehouse-check',
  templateUrl: './warehouse-check.component.html',
  styleUrls: ['./warehouse-check.component.scss']
})
export class WarehouseCheckComponent implements OnInit {
  units = [
    {id: 1, name: 'pcs'},
    {id: 2, name: 'kpcs'},
  ];
  warehouseLogCache: AbstractLog = new AbstractLog();

  constructor() { }

  ngOnInit() {
  }

}
