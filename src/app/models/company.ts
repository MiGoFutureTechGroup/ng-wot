
export class Company {

  constructor (
    // 公司名称
    public name: string = null,
    // 公司地址
    public location: string = null,
    // 组织机构代码（organizing institution bar code）
    public oibc: string = null,
  ) { }
}
