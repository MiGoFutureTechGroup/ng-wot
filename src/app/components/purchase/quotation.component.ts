import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {
  currencyList = [
    {value: 'RMB', viewValue: '人民币'},
    {value: 'USD', viewValue: '美元'},
  ];
  currencyMap = {
    'RMB': { name: '人民币', unit: '人民币元' },
    'USD': { name: '美元', unit: '美元' },
  };

  quotationGroupLog = {
    currency: 'RMB',
    tax: 1,
    fee: 1,
    termsofpayment: {
      deadline: 30,
      other: undefined,
    },
  }
  quotationLog = {
    supplierPartId: undefined,
    demanderPartId: undefined,
    mpq: undefined,
    moq: undefined,
    unit: undefined,
    lt: {
      value: undefined,
      unit: 'd',
    },
    price: {
      value: undefined,
      unit: undefined,
    },
  }

  constructor() { }

  ngOnInit() {
  }

  getTaxString(): string {
    return this.quotationGroupLog.tax ? '价格含税' : '价格未税';
  }

  getFeeString(): string {
    return this.quotationGroupLog.fee ? '价格已含运费' : '价格不含运费';
  }

  getCurrencyName(): string {
    let currency = this.currencyMap[this.quotationGroupLog.currency];
    return currency ? currency.name : '';
  }

  getCurrencyUnit(): string {
    let currency = this.currencyMap[this.quotationGroupLog.currency];
    return currency ? currency.unit : '';
  }

  getQuantityName(): string {
    let unit = this.quotationLog.unit;
    return unit ? unit.toUpperCase() : '';
  }

  getPriceUnit(): string {
    let currencyUnit = this.getCurrencyUnit();
    let quantityName = this.getQuantityName();
    return currencyUnit && quantityName ? currencyUnit + '/' + quantityName : '';
  }

  onClickTOP(): void {
    this.quotationGroupLog.termsofpayment.deadline = 0;
  }

}

