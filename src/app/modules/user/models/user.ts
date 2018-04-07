import { Role } from './role';
import { Company } from './company';

export class User {
  constructor(
    // 用户 ID
    public id: string = null,
    // 用户类型
    public type: Role = new Role(),
    // 用户名称
    public name: string = null,
    // 注册日期
    public date: string = null,
    // 所属公司
    public company: Company = new Company(),

    // 联系方式
    // QQ
    public qq: string = null,
    // 手机号码
    public phoneNumber: string = null,
    // 座机号码
    public landlineNumber: string = null,
    // 电子邮箱
    public workEMail: string = null,

    ////////////////////////////////////////////
    // 虚用户
    ////////////////////////////////////////////
    // 用例：
    // 采购员手动添加供应商信息时，需要记录联系人名称及其联系方式
    public isVirtual: boolean = false,
  ) {}
}

export const ELEMENT_DATA: User[] = [
  {
    id: '1',
    type: new Role('人脑研究员'),
    name: '米开朗琪罗',
    date: '2017-01',
    company: new Company('米戈未来科技有限公司'),
    qq: '123123123',
    phoneNumber: '12123',
    landlineNumber: '111111',
    workEMail: '34234@1542.com',
    isVirtual: false,
  }
];
