
export class UserType {
	// 用户类型 ID
	id: 	string;
	// 用户类型名称
	name:	string;
	// 注册日期
	date:	string;
	// 操作用户
	opId:	string;

	constructor(
			id: string = '',
			name: string = '',
			date: string = '',
			opid: string = ''
	) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.opId = opid;
	}
}
