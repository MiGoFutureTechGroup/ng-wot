
export class User {
	// 用户 ID
	id: 	string;
	// 用户名称
	name:	string;
	// 注册日期
	date:	string;

	constructor(
			id: string = '',
			name: string = '',
			date: string = '',
	) {
		this.id = id;
		this.name = name;
		this.date = date;
	}
}

export const EMPTY_USER: User = new User();