import { Component, OnInit } from '@angular/core';

import { Warehouse, InstockLog } from '../../models/warehouse';
import { User } from '../../models/user';

@Component({
  selector: 'app-instock',
  templateUrl: './instock.component.html',
  styleUrls: ['./instock.component.scss']
})
export class InstockComponent implements OnInit {
  units = [
    {id: 1, name: 'pcs'},
    {id: 2, name: 'kpcs'},
  ];
  warehouseLogCache: InstockLog = new InstockLog();

  constructor() { }

  ngOnInit() {
  }

}
