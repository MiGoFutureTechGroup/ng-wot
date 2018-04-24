import { OnInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Sort } from '@angular/material';

import { User, ELEMENT_DATA } from '../models/user';
import { UserService } from '../services/user.service';
// test
import { Company } from '../models/company';
import { Role } from '../models/role';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns = ['id', 'roleId', 'name', 'regtime', 'companyId', 'qq', 'phoneNumber', 'landlineNumber', 'email'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>(ELEMENT_DATA);
  selection: SelectionModel<User> = new SelectionModel<User>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private location: Location,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<User>(this.userService.getUsers().value);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onClickTableRow(row: User): void {
    this.selection.toggle(row);
    this.router.navigate(['/users/', row.id]);
  }

  onSortUsers(sort: Sort) {
    console.log('Sorting ...');
    if (!sort.active || sort.direction == '') {
      return;
    }
  }

}
