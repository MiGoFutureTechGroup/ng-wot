
export class Company {
  constructor (
    /* 主键 */
    public id?: string,
    /* 数据库记录创建者 */
    public cuid?: string,
    /* 数据库记录创建时间 */
    public ctime?: Date,

    /* 公司名称 */
    public name: string = null,
    /* 公司地址 */
    public location?: string,
    /* 组织机构代码（organizing institution bar code） */
    public oibc?: string,
  ) { }
}
