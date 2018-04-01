import { UserType } from './user-type';
import { Company } from './company';

export class User {
  // 用户 ID
  id: string;
  // 用户类型
  type: UserType;
  // 用户名称
  name: string;
  // 注册日期
  date: string;
  // 所属公司
  company: Company;

  // 联系方式
  // QQ
  qq: string;
  // 手机号码
  phoneNumber: string;
  // 座机号码
  landlineNumber: string;
  // 电子邮箱
  workEMail: string;

  ////////////////////////////////////////////
  // 虚用户
  ////////////////////////////////////////////
  // 用例：
  // 采购员手动添加供应商信息时，需要记录联系人名称及其联系方式
  isVirtual: boolean = false;
}
