
<template>
	<div class="tabs">
		<T-tabs @change="tabs_change" :list="list"></T-tabs>
		<router-view></router-view>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	import r from "_hook/router.js";
	const { routerPush } = r();

	// import card from "./components/card.vue";
	const list = ref([
		{
			name: "表格查询",
			value: 1,
		},
		{
			name: "大屏效果",
			value: 2,
		},
		{
			name: "电子签名",
			value: 3,
		},
	]);
	const list_router = {
		1: "/bookmark/table",
	};

	const tabs_change = (data, index) => {
		routerPush({
			path: list_router[data.value],
		});
	};
</script>

<style scoped lang="less">
</style>
