import { Creation } from './creation';
import { MaterialType } from './material-type';

export class Material extends Creation {
  // 料号
  partId: string;
  // 规格
  gauge: string;
  // 分类
  type: MaterialType;
  // 性能参数
  property: string;
  // 外观特征
  guise: string;
  // 设计图纸
  design: undefined;
  // 实物照片
  photo: undefined;
}
