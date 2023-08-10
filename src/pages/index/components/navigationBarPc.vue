
<template>
	<!-- 顶部导航栏 -->
	<div class="navigation_bar_pc" @click="scaleBarFn">
		<ul @click.stop="routerPushFn">
			<li
				v-for="({ title, icon, path }, index) in list"
				:key="index"
				:class="{ li_active: path_name == path }"
			>
				<span :class="icon" class="iconfont"></span>
				<span class="icon_text" :data-path="path">{{ title }}</span>
			</li>
		</ul>
	</div>
</template>
<script setup>
	import r from "_hook/router.js";
	import { layout_routes } from "@/router/index";
	import { onMounted, ref } from "vue";
	import _ from "_hook/path_name.js";
	const { route, router, routerPush } = r();
	const path_name = ref(null);
	const subtitle = ref(null);
	onMounted(() => {
		path_name.value = window.location.hash.split("#").at(-1);
	});
	// click_times统计点击的次数，根据值来设置css变量
	let click_times = 1;
	const scaleBarFn = () => {
		click_times++;
		const root = document.querySelector(".navigation_bar_pc");
		if (click_times % 2 == 0) {
			root.setAttribute("style", "--width:70px;--vis:none;");
		} else {
			root.setAttribute("style", "--width:150px;--vis:inline;");
		}
	};
	const routerPushFn = (e) => {
		console.log(e);
		const dataset = e.target.dataset;
		const path = dataset.path;
		subtitle.value = dataset.subtitle;
		if (!path) {
			return;
		}
		path_name.value = path;
		routerPush({ path });
	};
	const list = layout_routes.map((item) => {
		const { title, icon, subtitle } = item.meta;
		return {
			title,
			path: item.path,
			icon,
			subtitle,
		};
	});
	Object.freeze(list);
</script>

<style scoped lang="less">
	.navigation_bar_pc {
		--width: 150px;
		--vis: inline;
		height: 100vh;
		width: var(--width);
		// background: linear-gradient(
		// 	rgba(25, 202, 173, 0.6),
		// 	rgba(25, 202, 173, 0.9),
		// 	rgba(25, 202, 173, 0.4)
		// );
		background-color: #fff;
		transition: width 0.5s ease-in-out;
		.icon_text {
			display: var(--vis);
			cursor: pointer;
		}
		ul {
			// background-color: #19CAAD;
			color: white;
			li {
				white-space: nowrap;
				padding: 15px;
				color: #000;
				.icon_text:hover {
					text-decoration: underline;
				}
				span {
					line-height: 20px;
				}
			}
			.li_active {
				text-decoration: underline;
			}
		}
	}
	.iconfont {
		width: 40px;
		display: inline-block;
		text-align: center;
		font-size: 20px;
	}
</style>
