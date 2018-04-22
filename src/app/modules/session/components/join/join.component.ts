import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ValidatorFn, AbstractControl } from '@angular/forms';

import { Company } from '../../../user/models/company';

@Component({
	selector: 'app-join',
	templateUrl: './join.component.html',
	styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  fg01: FormGroup;
  fg02: FormGroup;
  /* 正则表达式 */
  pCompanyName    = /^[\u4e00-\u9fa5]{6,}$/;
  pLandlineNumber = /^(0[0-9]{2,3}[- ]?)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/;
  pMobilephNumber = /^13[456789][0-9]{8}|15[89][0-9]{8}$/;
  pStrongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
  pIdentityNumber = /^((\d{15})|(\d{18})|(\d{17}X))$/;
  pOIBC           = /^[A-Za-z0-9]{8}-[A-Za-z0-9]{1}/;
  pPostcode_CN    = /^[1-9]\d{5}(?!\d)$/;
  /* 公司代码 */
  // TODO
  code: string;
  info = {
      name: undefined,
      addr: undefined,
      tel: undefined,
      fax: undefined,
      username: undefined,
      password: undefined,
      idnum: undefined,
      phone: undefined,
  }

	constructor(
    private _formBuilder: FormBuilder,
  ) { }

	ngOnInit() {
    this.fg01 = this._formBuilder.group({
      /* 公司 全称 */
      company: ['', [Validators.required,],],
      /* 公司 地址 */
      address: ['', [Validators.required,],],
      /* 公司 座机 */
      tel: ['',],
      /* 公司 传真 */
      fax: ['',],
      /* 组织机构代码 */
      oibc: ['',],
    });
    this.fg02 = this._formBuilder.group({
      /* 管理员 昵称 */
      adminName: ['', [Validators.required,],],
      /* 管理员 密码 */
      adminPass: ['', [Validators.required,],],
      /* 管理员 身份证号码 */
      idnum: ['', [Validators.required,],],
      /* 管理员 手机号码 */
      phone: ['', [Validators.required,],],
      /* 管理员 电子邮箱 */
      email: ['', [Validators.required, Validators.email,],],
    });
	}

  submit(): void {
  }

}
