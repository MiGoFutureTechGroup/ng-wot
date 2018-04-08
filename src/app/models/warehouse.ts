export class Warehouse {
  /* 主键 */
  id: string;
  /* 数据库记录创建者 */
  cuid: string;
  /* 数据库记录创建时间 */
  ctime: Date;

  /* 所属公司 */
  companyId: string;
  /* 仓库名称 */
  name: string;
}

export class AbstractLog {
  /* 主键 */
  id: number;
  /* 数据库记录创建者 */
  cuid: string;
  /* 数据库记录创建时间 */
  ctime: Date;

  /* 操作日期 */
  date: Date;
  /* 经办人 */
  operatorId: string;
  /* 所属仓库 */
  warehouseId: string;
  /* 仓库料号 */
  partId: string;
  /* 数量 */
  amount: number;
  /* 单位 */
  unit: string;
  /* 备注 */
  comment: string;
}

export class InstockLog extends AbstractLog {
  /* 供应商 */
  providerCompanyId: string;
}

export class ExstockLog extends AbstractLog {
  /* 领料人 */
  pickerUserId: string;
}
