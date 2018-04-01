import { OnInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Location } from '@angular/common';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
// test
import { Company } from '../../models/company';
import { UserType } from '../../models/user-type';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['id', 'type', 'name', 'date', 'company', 'qq', 'phoneNumber', 'landlineNumber', 'workEMail'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
  selection = new SelectionModel<User>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private location: Location,
    private service: UserService,
  ) { }

  ngOnInit() {
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
    this.location.go('/users/' + row.id);
    console.log(row);
  }

}

const ELEMENT_DATA: User[] = [
  {id: '1', type: new UserType(), name: 'abc', date: '1993', company: new Company(), qq: '123123123', phoneNumber: '', landlineNumber: '', workEMail: '', isVirtual: false}
];
