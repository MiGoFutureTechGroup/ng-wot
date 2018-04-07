import { User } from './user';
import { Company } from './company';

export class Role {
  constructor(
    // 用户分组名称
    public name: string = null,
    // 用户父分组
    public parent?: Role,

    ////////////////////////////////////////////
    // 元信息
    ////////////////////////////////////////////
    // 用户分组 ID
    public id: string = null,
    // 创建时间
    public ctime?: Date,
    // 创建者
    public cid?: string,
  ) {
  }
}
