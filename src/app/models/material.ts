import { MaterialType } from './material-type';

export class Material {
  /* 主键 */
  id: string;
  /* 数据库记录创建者 */
  cuid: string;
  /* 数据库记录创建时间 */
  ctime: Date;

  /* 料号 */
  partId: string;
  /* 规格 */
  gauge: string;
  /* 分类 */
  typeId: string;
  /* 性能参数 */
  property: string;
  /* 外观特征 */
  guise: string;
  /* 设计图纸 */
  design: undefined;
  /* 实物照片 */
  photo: undefined;
}
