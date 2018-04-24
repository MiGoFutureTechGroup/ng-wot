import { Role } from './role';
import { Company } from './company';

export class User {
  constructor(
    /* 主键 */
    public id?: string,
    /* 数据库记录创建者 */
    public cuid?: string,
    /* 数据库记录创建时间 */
    public ctime?: Date,

    /* 用户类型 */
    public roleId: string = null,
    /* 用户名称 */
    public name: string = null,
    /* 注册日期 */
    public regtime: string = null,
    /* 所属公司 */
    public companyId: string = null,

    /* 联系方式 */
    /* QQ */
    public qq: string = null,
    /* 手机号码 */
    public phoneNumber: string = null,
    /* 座机号码 */
    public landlineNumber: string = null,
    /* 电子邮箱 */
    public email: string = null,

    /* 虚用户 */
    public isVirtual: boolean = false,
  ) {}
}

export const ELEMENT_DATA: User[] = [
  new User(
    '1',
    null,
    new Date(),

    '425',
    '米开朗琪罗',
    '2017-01',
    '91817',
    '123123123',
    '12123',
    '111111',
    '34234@1542.com',
    false,
  ),
  new User(
    '2',
    null,
    new Date(),

    '426',
    '吉米多维奇',
    '2017-02',
    '91814',
    '123123123',
    '12123',
    '111111',
    '32124@1542.com',
    false,
  ),
];
