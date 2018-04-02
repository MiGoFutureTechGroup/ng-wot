import { Creation } from './creation';
import { Company } from './company';
import { User } from './user';

export class Warehouse {
  // 所属公司
  owner: Company;
  // 仓库名称
  name: string;
}

export class AbstractLog extends Creation {
  // 操作日期
  date: Date;
  // 经办人
  user: User;
  // 所属仓库
  warehouse: Warehouse;
  // 仓库料号
  partId: string;
  // 数量
  amount: number;
  // 单位
  unit: string;
  // 备注
  comment: string;
}

export class InstockLog extends AbstractLog {
  // 供应商
  provider: Company;
}

export class ExstockLog extends AbstractLog {
  // 领料人
  picker: User;
}
