import { Creation } from './creation';

export class UserType extends Creation {
  constructor(
    // 用户类型名称
    public name: string = null,
  ) {
    super();
  }
}
