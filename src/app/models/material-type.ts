export class MaterialType {
  /* 主键 */
  id: string;
  /* 数据库记录创建者 */
  cuid: string;
  /* 数据库记录创建时间 */
  ctime: Date;

  /* 父类型 ID */
  parentId?: string;
  /* 类型名称 */
  name: string;
}
