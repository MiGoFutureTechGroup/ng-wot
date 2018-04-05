import { OnInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Warehouse, InstockLog } from '../../models/warehouse';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  units = [
    {id: 1, name: 'pcs'},
    {id: 2, name: 'kpcs'},
  ];
  warehouseLogCache: InstockLog = new InstockLog();
  displayedColumns1 = ['rcptDate', 'providerId', 'partId', 'amount', 'unit', 'comment'];
  displayedColumns2 = ['select', 'providerId', 'partId', 'amount', 'unit', 'comment'];

  dataSource = new MatTableDataSource<InstockLog>(MOCK_DATA);
  selection = new SelectionModel<InstockLog>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  applyFilter(value: string): void {
  }

}

const MOCK_DATA: InstockLog[] = [
];

const MOCK_WAREHOUSE: Warehouse = new Warehouse();
