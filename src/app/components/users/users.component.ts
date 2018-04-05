import { OnInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private location: Location,
    private userService: UserService,
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
    this.router.navigate(['/users/', row.id]);
    this.userService.activeUser = row;
  }

}

const ELEMENT_DATA: User[] = [
  {
    id: '1',
    type: new UserType('人脑研究员'),
    name: '米开朗琪罗',
    date: '2017-01',
    company: new Company('米戈未来科技有限公司'),
    qq: '123123123',
    phoneNumber: '',
    landlineNumber: '',
    workEMail: '',
    isVirtual: false,
  }
];
