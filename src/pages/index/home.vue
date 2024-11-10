<template>
	<cl-page status-bar-background="transparent">
		<view class="page-home">
			<view class="logo">
				<text class="name">{{ app.info.name }}</text>
				<text class="version">v7.3.0</text>
			</view>

			<view class="group" v-for="(item, index) in list" :key="index">
				<text class="title">{{ item.label }}</text>

				<view class="list">
					<view
						class="item"
						v-for="(item2, index2) in item.children"
						:key="index2"
						@tap="toLink(item2.path)"
					>
						<text class="label">{{ item2.label }}</text>

						<cl-icon name="arrow-right" color="info"></cl-icon>
					</view>
				</view>
			</view>
		</view>

		<tabbar />
	</cl-page>
</template>

<script lang="ts" setup>
import { useApp, useCool, module } from "/@/cool";
import { useUi } from "../../uni_modules/cool-ui";
import Tabbar from "./components/tabbar.vue";
import { onReady } from "@dcloudio/uni-app";
import { ref } from "vue";
import { isEmpty } from "lodash-es";

const { router, service } = useCool();
const ui = useUi();
const app = useApp();

const list = ref([
	{
		label: "基础组件",
		children: [
			{
				label: "Button 按钮",
				path: "/pages/demo/basic/button",
			},
			{
				label: "Text 文本",
				path: "/pages/demo/basic/text",
			},
			{
				label: "Image 图片",
				path: "/pages/demo/basic/image",
			},
			{
				label: "Icon 图标",
				path: "/pages/demo/basic/icon",
			},
			{
				label: "Tag 标签",
				path: "/pages/demo/basic/tag",
			},
			{
				label: "Toast 提示",
				path: "/pages/demo/basic/toast",
			},
			{
				label: "Loading 加载",
				path: "/pages/demo/basic/loading",
			},
		],
	},
	{
		label: "表单组件",
		children: [
			{
				label: "Input 输入框",
				path: "/pages/demo/form/input",
			},
			{
				label: "InputNumber 计数器",
				path: "/pages/demo/form/input-number",
			},
			{
				label: "Textarea 文本域",
				path: "/pages/demo/form/textarea",
			},
			{
				label: "Checkbox 多选框",
				path: "/pages/demo/form/checkbox",
			},
			{
				label: "Radio 单选框",
				path: "/pages/demo/form/radio",
			},
			{
				label: "Select 下拉框",
				path: "/pages/demo/form/select",
			},
			{
				label: "SelectDate 时间选择器",
				path: "/pages/demo/form/select-date",
			},
			{
				label: "SelectPopup 下拉框弹窗",
				path: "/pages/demo/form/select-popup",
			},
			{
				label: "SelectCity 城市选择器",
				path: "/pages/demo/form/select-city",
			},
			{
				label: "Rate 评分",
				path: "/pages/demo/form/rate",
			},
			{
				label: "Switch 开关",
				path: "/pages/demo/form/switch",
			},
			{
				label: "Upload 文件上传",
				path: "/pages/demo/form/upload",
			},
			{
				label: "Form 表单",
				path: "/pages/demo/form/form",
			},
		],
	},
	{
		label: "视图组件",
		children: [
			{
				label: "Avatar 头像",
				path: "/pages/demo/view/avatar",
			},
			{
				label: "Badge 角标",
				path: "/pages/demo/view/badge",
			},
			{
				label: "Banner 轮播图",
				path: "/pages/demo/view/banner",
			},
			{
				label: "Card 卡片",
				path: "/pages/demo/view/card",
			},
			{
				label: "Countdown 倒计时",
				path: "/pages/demo/view/countdown",
			},
			{
				label: "Divider 分割线",
				path: "/pages/demo/view/divider",
			},
			{
				label: "Flex 弹性",
				path: "/pages/demo/view/flex",
			},
			{
				label: "Grid 宫格",
				path: "/pages/demo/view/grid",
			},
			{
				label: "List 列表",
				path: "/pages/demo/view/list",
			},
			{
				label: "ListIndex 索引列表",
				path: "/pages/demo/view/list-index",
			},
			{
				label: "Loadmore 加载更多",
				path: "/pages/demo/view/loadmore",
			},
			{
				label: "Noticebar 通知栏",
				path: "/pages/demo/view/noticebar",
			},
			{
				label: "Popup 弹出框",
				path: "/pages/demo/view/popup",
			},
			{
				label: "Progress 进度条",
				path: "/pages/demo/view/progress",
			},
			{
				label: "Search 搜索框",
				path: "/pages/demo/view/search",
			},
			{
				label: "Slider 滑块",
				path: "/pages/demo/view/slider",
			},
			{
				label: "Tabs 选项卡",
				path: "/pages/demo/view/tabs",
			},
			{
				label: "Timeline 时间线",
				path: "/pages/demo/view/timeline",
			},
			{
				label: "Topbar 顶部导航栏",
				path: "/pages/demo/view/topbar",
			},
			{
				label: "Waterfall 瀑布流",
				path: "/pages/demo/view/waterfall",
			},
			{
				label: "Scroller 滚动条",
				path: "/pages/demo/view/scroller",
			},
			{
				label: "Skeleton 骨架图",
				path: "/pages/demo/view/skeleton",
			},
		],
	},
	{
		label: "高级组件",
		children: [
			{
				label: "ActionSheet 操作菜单",
				path: "/pages/demo/extend/action-sheet",
			},
			{
				label: "Captcha 验证码",
				path: "/pages/demo/extend/captcha",
			},
			{
				label: "Confirm 确认框",
				path: "/pages/demo/extend/confirm",
			},
			{
				label: "Dialog 对话框",
				path: "/pages/demo/extend/dialog",
			},
			{
				label: "FilterBar 过滤栏",
				path: "/pages/demo/extend/filter-bar",
			},
			{
				label: "Page 页面",
				path: "/pages/demo/extend/page",
			},
			{
				label: "Tree 树形",
				path: "/pages/demo/extend/tree",
			},
			{
				label: "Service 服务",
				path: "/pages/demo/extend/service",
			},
		],
	},
]);

function toLink(path: string) {
	router.push({
		path,
		isGuard: false,
	});
}

onReady(() => {
	const children = module.list.filter((e) => e.demo).map((e) => e.demo!);

	if (!isEmpty(children)) {
		list.value.unshift({
			label: "插件 / 模块",
			children,
		});
	}
});
</script>

<style lang="scss" scoped>
.page-home {
	.logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 150rpx 0 100rpx 0;
		height: 60rpx;
		font-weight: bold;

		.name {
			font-size: 80rpx;
			animation: showName 2.5s forwards;
			background: linear-gradient(to right, #6b69f8, #a35df2, #d14bd8);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.version {
			margin-top: 10rpx;
			font-size: 28rpx;
			color: #666;
			animation: showV 2.5s forwards;
		}
	}

	.dd {
		display: flex;
		padding: 50rpx;

		.a {
			flex: 1;
		}
	}

	@keyframes showName {
		from {
			letter-spacing: -40rpx;
			filter: blur(20rpx);
		}

		to {
			letter-spacing: 6rpx;
		}
	}

	@keyframes showV {
		from {
			letter-spacing: -10rpx;
			filter: blur(20rpx);
		}

		to {
			letter-spacing: 1rpx;
		}
	}

	.group {
		padding: 30rpx;

		.title {
			display: block;
			margin-bottom: 20rpx;
			margin-left: 10rpx;
			font-size: 26rpx;
			color: #999;
		}

		.list {
			.item {
				display: flex;
				align-items: center;
				height: 80rpx;
				padding: 0 30rpx;
				margin-bottom: 25rpx;
				background-color: #fff;
				border-radius: 80rpx;
				box-shadow: 0 1rpx 8rpx #6666660f;

				.label {
					flex: 1;
					font-size: 28rpx;
					font-weight: bold;
				}
			}
		}
	}
}
</style>
