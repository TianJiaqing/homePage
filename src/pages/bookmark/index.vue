
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
			path: "/bookmark/table",
		},
		{
			name: "大屏效果",
			value: 2,
			path: "/bookmark/echarts",
		},
		{
			name: "电子签名",
			value: 3,
			path: "/bookmark/signature",
		},
		{
			name: "IM聊天",
			value: 4,
			path: "/bookmark/table",
		},
		{
			name: "富文本",
			value: 5,
			path: "/bookmark/table",
		},
	]);

	const tabs_change = (data, index) => {
		routerPush({
			path: data.path,
		});
	};
</script>

<style scoped lang="less">
</style>
