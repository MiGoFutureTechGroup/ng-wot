import { User } from './user';
import { Company } from './company';

export class Role {
  constructor(
    /* 主键 */
    public id?: string,
    /* 数据库记录创建者 */
    public cuid?: string,
    /* 数据库记录创建时间 */
    public ctime?: Date,


    /* 用户分组名称 */
    public name: string = null,
    /* 用户父分组 */
    public parentId?: string,
  ) {
  }
}
