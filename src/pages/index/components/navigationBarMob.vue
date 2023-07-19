
<template>
	<!-- 顶部导航栏 -->
	<div class="navigationBarMob" :class="{ navigationBarMob_expand: show }">
		<div class="icon_menu_div" @click="expand">
			<span
				class="iconfont icon-menu"
				:class="{ icon_menu_expand: show }"
			></span>
		</div>
		<ul :class="{ expand: show }" @click.stop="routerPushFn">
			<li
				:data-path="path"
				v-for="({ title, path }, index) in list"
				:key="index"
			>
				{{ title }}
			</li>
		</ul>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	import r from "_hook/router.js";
	const { route, router, routerPush } = r();

	const show = ref(false);
	const expand = () => {
		show.value = !show.value;
	};
	const routerPushFn = (e) => {
		const path = e.target.dataset.path;
		if (!path) {
			return;
		}
		show.value = false;
		routerPush({ path });
	};
	const list = [
		{
			title: "一个首页",
			icon: "icon-iconhuaban1-15",
			path: "/",
		},
		{
			title: "科技感",
			icon: "icon-keji",
			path: "/technology_code",
		},
		{
			title: "关于",
			icon: "icon-jianli",
			path: "/biographical_notes",
		},
		{
			title: "BOLG",
			icon: "icon-boke1",
			path: "/bolg",
		},
		{
			title: "网页书签",
			icon: "icon-shuqian",
			path: "/bookmark",
		},
	];
	Object.freeze(list);
</script>

<style scoped lang="less">
	.navigationBarMob {
		background-color: #000;
		text-align: center;
		z-index: 999999;
		padding: 10px 0;
		width: 100%;
		max-width: 40px;
		transition: all 0.1s ease-in-out;
		overflow: hidden;
		flex-shrink: 0;
		position: fixed;
		top: 0;
		left: 0;
		display: inline-block;
		flex-grow: 0;
		border: 1px solid;
		line-height: 20px;
		.icon_menu_div {
		}
		.icon-menu {
			color: white;
			cursor: pointer;
			font-size: 12px;
			margin: 0px;
		}
		.icon_menu_expand {
			margin: 10px;
		}
		li {
			color: white;
			line-height: 20px;
			padding: 10px 0;
		}
		ul {
			transition: all 0.1s ease-in-out;
			height: 0;
			overflow: hidden;
		}
		.expand {
			height: 200px;
		}
	}
	.navigationBarMob_expand {
		width: 100%;
		height: auto;
		padding: 20px 0;
		max-width: 100%;
	}
</style>
