
<template>
	<div class="echarts_content">
		<h1>大屏可视化</h1>
	</div>
</template>
<script setup>
	import { onMounted } from "vue";
	import $E from "_hook/echarts";
	onMounted(() => {});
</script>


<style scoped lang='less'>
	.echarts_content {
		height: calc(100vh - 60px);
		display: flex;
		flex-wrap: wrap;
		> div {
			flex-grow: 1;
		}
		.main1 {
			height: 100%;
			min-width: 500px;
		}
		.main2 {
			height: 100%;
			min-width: 500px;
		}
		.main3 {
			height: 100%;
			min-width: 500px;
		}
	}
</style>
