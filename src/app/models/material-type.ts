import { Creation } from './creation';

export class MaterialType extends Creation {
  parent: MaterialType;
  name: string;
}
