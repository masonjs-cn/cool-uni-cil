declare namespace Eps {
	interface AppComplainEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 类型
		 */
		type?: number;
		/**
		 * 联系方式
		 */
		contact?: string;
		/**
		 * 内容
		 */
		content?: string;
		/**
		 * 图片
		 */
		images?: json;
		/**
		 * 状态 0-未处理 1-已处理
		 */
		status?: number;
		/**
		 * 处理人ID
		 */
		handlerId?: number;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppFeedbackEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 联系方式
		 */
		contact?: string;
		/**
		 * 类型
		 */
		type?: number;
		/**
		 * 内容
		 */
		content?: string;
		/**
		 * 图片
		 */
		images?: json;
		/**
		 * 状态 0-未处理 1-已处理
		 */
		status?: number;
		/**
		 * 处理人ID
		 */
		handlerId?: number;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppGoodsEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 价格
		 */
		price?: number;
		/**
		 * 原价
		 */
		originalPrice?: number;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;
		/**
		 * 排序
		 */
		sort?: number;
		/**
		 * 类型 0-天 1-月 2-年 3-永久
		 */
		type?: number;
		/**
		 * 时长
		 */
		duration?: number;
		/**
		 * 标签
		 */
		tag?: string;
		/**
		 * 标签颜色
		 */
		tagColor?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppVersionEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 版本号
		 */
		version?: string;
		/**
		 * 类型
		 */
		type?: number;
		/**
		 * 下载地址
		 */
		url?: string;
		/**
		 * 强制更新 0-否 1-是
		 */
		forceUpdate?: number;
		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;
		/**
		 * 热更新 0-否 1-是
		 */
		hotUpdate?: number;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CsMsgEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 会话ID
		 */
		sessionId?: number;
		/**
		 * 消息内容
		 */
		content?: json;
		/**
		 * 类型 0-反馈 1-回复
		 */
		type?: number;
		/**
		 * 状态 0-未读 1-已读
		 */
		status?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoGoodsEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsCommentEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 商品ID
		 */
		goodsId?: number;
		/**
		 * 订单ID
		 */
		orderId?: number;
		/**
		 * 内容
		 */
		content?: string;
		/**
		 * 星数
		 */
		starCount?: number;
		/**
		 * 图片
		 */
		pics?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 类型ID
		 */
		typeId?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 副标题
		 */
		subTitle?: string;
		/**
		 * 主图
		 */
		mainPic?: string;
		/**
		 * 图片
		 */
		pics?: json;
		/**
		 * 价格
		 */
		price?: number;
		/**
		 * 已售
		 */
		sold?: number;
		/**
		 * 详情
		 */
		content?: string;
		/**
		 * 状态 0-下架 1-上架
		 */
		status?: number;
		/**
		 * 排序
		 */
		sortNum?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsSearchKeywordEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 排序
		 */
		sortNum?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsSpecEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 商品ID
		 */
		goodsId?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 价格
		 */
		price?: number;
		/**
		 * 库存
		 */
		stock?: number;
		/**
		 * 排序
		 */
		sortNum?: number;
		/**
		 * 图片
		 */
		images?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsTypeEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 父ID
		 */
		parentId?: number;
		/**
		 * 排序
		 */
		sortNum?: number;
		/**
		 * 图片
		 */
		pic?: string;
		/**
		 * 状态  0-禁用 1-启用
		 */
		status?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface InfoBannerEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 跳转路径
		 */
		path?: string;
		/**
		 * 图片
		 */
		pic?: string;
		/**
		 * 排序
		 */
		sortNum?: number;
		/**
		 * 状态 1:启用 2:禁用
		 */
		status?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MarketCouponInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 类型 0-满减
		 */
		type?: number;
		/**
		 * 金额
		 */
		amount?: number;
		/**
		 * 数量
		 */
		num?: number;
		/**
		 * 已领取
		 */
		receivedNum?: number;
		/**
		 * 开始时间
		 */
		startTime?: Date;
		/**
		 * 结束时间
		 */
		endTime?: Date;
		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;
		/**
		 * 条件
		 */
		condition?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MarketCouponUserEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 优惠券ID
		 */
		couponId?: number;
		/**
		 * 状态 0-未使用 1-已使用
		 */
		status?: number;
		/**
		 * 使用时间
		 */
		useTime?: Date;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface OrderInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 支付方式 0-待支付 1-微信 2-支付宝
		 */
		payType?: number;
		/**
		 * 支付时间
		 */
		payTime?: Date;
		/**
		 * 订单号
		 */
		orderNum?: string;
		/**
		 * 状态 0-待付款 1-待发货 2-待收货 3-待评价 4-交易完成 5-退款中 6-已退款 7-已关闭
		 */
		status?: number;
		/**
		 * 价格
		 */
		price?: number;
		/**
		 * 优惠金额
		 */
		discountPrice?: number;
		/**
		 * 优惠来源
		 */
		discountSource?: json;
		/**
		 * 地址
		 */
		address?: json;
		/**
		 * 物流信息
		 */
		logistics?: json;
		/**
		 * 退款
		 */
		refund?: json;
		/**
		 * 退款状态
		 */
		refundStatus?: number;
		/**
		 * 退款申请时间
		 */
		refundApplyTime?: Date;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 关闭备注
		 */
		closeRemark?: string;
		/**
		 * 已开票: 0-未开票 1-已开票
		 */
		invoice?: number;
		/**
		 * 微信类型 0-小程序 1-公众号 2-App
		 */
		wxType?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface InfoBannerEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserAddressEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 联系人
		 */
		contact?: string;
		/**
		 * 手机号
		 */
		phone?: string;
		/**
		 * 省
		 */
		province?: string;
		/**
		 * 市
		 */
		city?: string;
		/**
		 * 区
		 */
		district?: string;
		/**
		 * 地址
		 */
		address?: string;
		/**
		 * 是否默认
		 */
		isDefault?: boolean;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MarketCouponUserEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 登录唯一ID
		 */
		unionid?: string;
		/**
		 * 头像
		 */
		avatarUrl?: string;
		/**
		 * 昵称
		 */
		nickName?: string;
		/**
		 * 手机号
		 */
		phone?: string;
		/**
		 * 性别 0-未知 1-男 2-女
		 */
		gender?: number;
		/**
		 * 状态 0-禁用 1-正常 2-已注销
		 */
		status?: number;
		/**
		 * 登录方式 0-小程序 1-公众号 2-H5
		 */
		loginType?: number;
		/**
		 * 密码
		 */
		password?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserAddressEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}
	interface AppComplain {
		/**
		 * 提交投诉举报
		 */
		submit(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppComplainEntity[];
			[key: string]: any;
		}>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AppComplainEntity>;
		/**
		 * eps
		 */
		eps(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { submit: string; page: string; info: string; eps: string };
		/**
		 * 权限状态
		 */
		_permission: { submit: boolean; page: boolean; info: boolean; eps: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppFeedback {
		/**
		 * 提交意见反馈
		 */
		submit(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppFeedbackEntity[];
			[key: string]: any;
		}>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AppFeedbackEntity>;
		/**
		 * 权限标识
		 */
		permission: { submit: string; page: string; info: string };
		/**
		 * 权限状态
		 */
		_permission: { submit: boolean; page: boolean; info: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppGoods {
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AppGoodsEntity[]>;
		/**
		 * create
		 */
		create(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { list: string; create: string };
		/**
		 * 权限状态
		 */
		_permission: { list: boolean; create: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppVersion {
		/**
		 * 检查版本
		 */
		check(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<AppVersionEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<AppVersionEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppVersionEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			check: string;
			get: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			check: boolean;
			get: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BaseComm {
		/**
		 * 文件上传模式
		 */
		uploadMode(data?: any): Promise<any>;
		/**
		 * 文件上传
		 */
		upload(data?: any): Promise<any>;
		/**
		 * 参数配置
		 */
		param(data?: any): Promise<any>;
		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { uploadMode: string; upload: string; param: string; eps: string };
		/**
		 * 权限状态
		 */
		_permission: { uploadMode: boolean; upload: boolean; param: boolean; eps: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface CsMsg {
		/**
		 * 未读消息数
		 */
		unreadCount(data?: any): Promise<any>;
		/**
		 * 标记已读
		 */
		read(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CsMsgEntity[];
			[key: string]: any;
		}>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<CsMsgEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<CsMsgEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CsMsgEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			unreadCount: string;
			read: string;
			page: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			unreadCount: boolean;
			read: boolean;
			page: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface CsSession {
		/**
		 * 会话详情
		 */
		detail(data?: any): Promise<any>;
		/**
		 * 创建会话
		 */
		create(data?: any): Promise<any>;
		/**
		 * call
		 */
		call(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { detail: string; create: string; call: string };
		/**
		 * 权限状态
		 */
		_permission: { detail: boolean; create: boolean; call: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface DictInfo {
		/**
		 * 获得字典数据
		 */
		data(data?: any): Promise<any>;
		/**
		 * getter
		 */
		getter(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * list
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoGoodsEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			data: string;
			getter: string;
			add: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			data: boolean;
			getter: boolean;
			add: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface GoodsComment {
		/**
		 * 提交评论
		 */
		submit(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsCommentEntity[];
			[key: string]: any;
		}>;
		/**
		 * call
		 */
		call(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { submit: string; page: string; call: string };
		/**
		 * 权限状态
		 */
		_permission: { submit: boolean; page: boolean; call: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface GoodsInfo {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<GoodsInfoEntity>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<GoodsInfoEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<GoodsInfoEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			info: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			info: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface GoodsSearchKeyword {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<GoodsSearchKeywordEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<GoodsSearchKeywordEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsSearchKeywordEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface GoodsSpec {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<GoodsSpecEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<GoodsSpecEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsSpecEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface GoodsType {
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<GoodsTypeEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsTypeEntity[];
			[key: string]: any;
		}>;
		/**
		 * uniPhone
		 */
		uniPhone(data?: any): Promise<any>;
		/**
		 * password
		 */
		password(data?: any): Promise<any>;
		/**
		 * captcha
		 */
		captcha(data?: any): Promise<any>;
		/**
		 * smsCode
		 */
		smsCode(data?: any): Promise<any>;
		/**
		 * wxApp
		 */
		wxApp(data?: any): Promise<any>;
		/**
		 * phone
		 */
		phone(data?: any): Promise<any>;
		/**
		 * mini
		 */
		mini(data?: any): Promise<any>;
		/**
		 * mp
		 */
		mp(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			uniPhone: string;
			password: string;
			captcha: string;
			smsCode: string;
			wxApp: string;
			phone: string;
			mini: string;
			mp: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			uniPhone: boolean;
			password: boolean;
			captcha: boolean;
			smsCode: boolean;
			wxApp: boolean;
			phone: boolean;
			mini: boolean;
			mp: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface InfoBanner {
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<InfoBannerEntity[]>;
		/**
		 * info
		 */
		info(data?: any): Promise<InfoBannerEntity>;
		/**
		 * 权限标识
		 */
		permission: { list: string; info: string };
		/**
		 * 权限状态
		 */
		_permission: { list: boolean; info: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface MarketCouponInfo {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MarketCouponInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<MarketCouponInfoEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<MarketCouponInfoEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MarketCouponInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface MarketCouponUser {
		/**
		 * 领取优惠券
		 */
		receive(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<MarketCouponUserEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<MarketCouponUserEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MarketCouponUserEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			receive: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			receive: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OrderInfo {
		/**
		 * 物流信息
		 */
		logistics(data?: any): Promise<any>;
		/**
		 * 用户订单统计
		 */
		userCount(data?: any): Promise<any>;
		/**
		 * 确认收货
		 */
		confirm(data?: any): Promise<any>;
		/**
		 * 创建订单
		 */
		create(data?: any): Promise<any>;
		/**
		 * 取消订单
		 */
		cancel(data?: any): Promise<any>;
		/**
		 * 退款
		 */
		refund(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<OrderInfoEntity>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: OrderInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: {
			logistics: string;
			userCount: string;
			confirm: string;
			create: string;
			cancel: string;
			refund: string;
			update: string;
			info: string;
			page: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			logistics: boolean;
			userCount: boolean;
			confirm: boolean;
			create: boolean;
			cancel: boolean;
			refund: boolean;
			update: boolean;
			info: boolean;
			page: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OrderPay {
		/**
		 * 微信小程序支付
		 */
		wxMiniPay(data?: any): Promise<any>;
		/**
		 * 微信支付回调
		 */
		wxNotify(data?: any): Promise<any>;
		/**
		 * 微信APP支付
		 */
		wxAppPay(data?: any): Promise<any>;
		/**
		 * 微信公众号支付
		 */
		wxMpPay(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { wxMiniPay: string; wxNotify: string; wxAppPay: string; wxMpPay: string };
		/**
		 * 权限状态
		 */
		_permission: { wxMiniPay: boolean; wxNotify: boolean; wxAppPay: boolean; wxMpPay: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserAddress {
		/**
		 * 默认地址
		 */
		default(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UserAddressEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UserAddressEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserAddressEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			default: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			default: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserComm {
		/**
		 * 获取微信公众号配置
		 */
		wxMpConfig(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<MarketCouponUserEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<MarketCouponUserEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MarketCouponUserEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			wxMpConfig: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			wxMpConfig: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * 更新用户密码
		 */
		updatePassword(data?: any): Promise<any>;
		/**
		 * 更新用户信息
		 */
		updatePerson(data?: any): Promise<any>;
		/**
		 * 绑定手机号
		 */
		bindPhone(data?: any): Promise<any>;
		/**
		 * 绑定小程序手机号
		 */
		miniPhone(data?: any): Promise<any>;
		/**
		 * 获取用户信息
		 */
		person(data?: any): Promise<any>;
		/**
		 * 注销
		 */
		logoff(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<UserInfoEntity>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: {
			updatePassword: string;
			updatePerson: string;
			bindPhone: string;
			miniPhone: string;
			person: string;
			logoff: string;
			update: string;
			info: string;
			page: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			updatePassword: boolean;
			updatePerson: boolean;
			bindPhone: boolean;
			miniPhone: boolean;
			person: boolean;
			logoff: boolean;
			update: boolean;
			info: boolean;
			page: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserLogin {
		/**
		 * 刷新token
		 */
		refreshToken(data?: any): Promise<any>;
		/**
		 * 密码登录
		 */
		password(data?: any): Promise<any>;
		/**
		 * 图片验证码
		 */
		captcha(data?: any): Promise<any>;
		/**
		 * 验证码
		 */
		smsCode(data?: any): Promise<any>;
		/**
		 * 微信APP授权登录
		 */
		wxApp(data?: any): Promise<any>;
		/**
		 * 手机号登录
		 */
		phone(data?: any): Promise<any>;
		/**
		 * 小程序登录
		 */
		mini(data?: any): Promise<any>;
		/**
		 * 公众号登录
		 */
		mp(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			refreshToken: string;
			password: string;
			captcha: string;
			smsCode: string;
			wxApp: string;
			phone: string;
			mini: string;
			mp: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			refreshToken: boolean;
			password: boolean;
			captcha: boolean;
			smsCode: boolean;
			wxApp: boolean;
			phone: boolean;
			mini: boolean;
			mp: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	type json = any;

	type Service = {
		request(options?: {
			url: string;
			method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
			data?: any;
			params?: any;
			headers?: {
				[key: string]: any;
			};
			timeout?: number;
			proxy?: boolean;
			[key: string]: any;
		}): Promise<any>;
		app: { complain: AppComplain; feedback: AppFeedback; goods: AppGoods; version: AppVersion };
		base: { comm: BaseComm };
		cs: { msg: CsMsg; session: CsSession };
		dict: { info: DictInfo };
		goods: {
			comment: GoodsComment;
			info: GoodsInfo;
			searchKeyword: GoodsSearchKeyword;
			spec: GoodsSpec;
			type: GoodsType;
		};
		info: { banner: InfoBanner };
		market: { coupon: { info: MarketCouponInfo; user: MarketCouponUser } };
		order: { info: OrderInfo; pay: OrderPay };
		user: { address: UserAddress; comm: UserComm; info: UserInfo; login: UserLogin };
	};
}
