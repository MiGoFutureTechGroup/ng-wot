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

export class BaseLog extends AbstractLog {
  // 操作日期
  date: Date;
}

export class InstockLog extends BaseLog {
}

export class ExstockLog extends BaseLog {
}
