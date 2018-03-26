import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company = {
    name: undefined,
    address: undefined,
    oibc: undefined,
    postalcode: undefined,
    contact: {
      name: undefined,
      qq: undefined,
      phone: undefined,
      landline: undefined,
      email: undefined,
    }
  }

  constructor() { }

  ngOnInit() {
  }

  saveCompany(): void {

  }

  saveContact(): void {

  }

}
