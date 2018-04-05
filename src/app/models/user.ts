import { UserType } from './user-type';
import { Company } from './company';

export class User {
  constructor(
    // 用户 ID
    public id: string = null,
    // 用户类型
    public type: UserType = new UserType(),
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
