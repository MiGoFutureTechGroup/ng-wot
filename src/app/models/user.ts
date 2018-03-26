import { UserType } from './user-type';
import { Company } from './company';

export class User {
	// 用户 ID
	id: 	string;
  // 用户类型
  type: UserType;
	// 用户名称
	name:	string;
	// 注册日期
	date:	string;
  // 所属公司
  company: Company;
}
