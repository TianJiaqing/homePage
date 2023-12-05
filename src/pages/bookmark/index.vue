
<template>
	<div class="tabs">
		<T-tabs @change="tabs_change" :list="list"></T-tabs>
		<div class="router-view">
			<router-view ></router-view>
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	import r from "_hook/router.js";
	const { routerPush } = r();
	//导入bookmark子路由信息
	import bookmark_children from "@/router/utils/bookmark";
	//基本的bookmark路径
	const base_url = "/bookmark/";
	const list = bookmark_children.map(({ meta, path }) => ({
		name: meta.name,
		value: meta.value,
		path: base_url + path,
	}));
	const tabs_change = (data, index) => {
		routerPush({
			path: data.path,
		});
	};
</script>

<style scoped lang="less">
	.tabs {
		.router-view {
			height: calc(100vh - 50px);
			overflow: visible auto;
		}
	}
</style>
