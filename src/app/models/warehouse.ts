export class WarehouseLog {

	////////////////////////////
	// 隐藏数据
	////////////////////////////

	// 到货日期
	rcptDate: string = '';
	// 登记日期
	rgstDate: string = '';
	// 登记用户
	userId: string = '';

	////////////////////////////
	// 可见数据
	////////////////////////////

	// 供应商
	providerId: string;
	// 仓库料号
	partId: string;
	// 数量
	amount: number;
	// 单位
	unit: string;
	// 备注
	comment: string;

}