import { OnInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Warehouse, InstockLog } from '../../models/warehouse';
import { User } from '../../modules/user/models/user';

@Component({
  selector: 'app-warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.scss']
})
export class WarehouseTableComponent implements OnInit {

  displayedColumns = ['select', 'providerId', 'partId', 'amount', 'unit', 'comment'];
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
