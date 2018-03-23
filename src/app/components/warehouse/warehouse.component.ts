import { OnInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { WarehouseLog } from '../../models/warehouse';

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
  warehouseLogCache: WarehouseLog = {
    rcptDate: '', rgstDate: '', userId: '', providerId: '', partId: '', amount: undefined, unit: '', comment: '',
  };
  displayedColumns1 = ['rcptDate', 'providerId', 'partId', 'amount', 'unit', 'comment'];
  displayedColumns2 = ['select', 'providerId', 'partId', 'amount', 'unit', 'comment'];

  dataSource = new MatTableDataSource<WarehouseLog>(MOCK_DATA);
  selection = new SelectionModel<WarehouseLog>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  applyFilter(value: string): void {
  }

}

const MOCK_DATA: WarehouseLog[] = [
];
