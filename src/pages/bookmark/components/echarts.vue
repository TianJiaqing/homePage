
<template>
	<div class="echarts_content">
		<div id="main1" class="main1"></div>
		<div id="main2" class="main2"></div>
	</div>
</template>
<script setup>
	import { onMounted } from "vue";
	import _ from "_hook/js_utils";
	onMounted(() => {
		let echartsScript = document.createElement("script");
		echartsScript.type = "text/javascript";
		let echarts_url =
			"https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js";
		echartsScript.src = echarts_url;
		document.body.appendChild(echartsScript);

		echartsScript.onload = () => {
			const fn = () => {
				{
					document.getElementById("main1").removeAttribute("_echarts_instance_");
					var chartDom = document.getElementById("main1");
					var myChart = echarts.init(chartDom);
					// myChart.dispose()

					myChart.clear();
					var option;

					option = {
						xAxis: {
							type: "category",
							data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
						},
						yAxis: {
							type: "value",
						},
						series: [
							{
								data: [150, 230, 224, 218, 135, 147, 260],
								type: "line",
							},
						],
					};

					option && myChart.setOption(option);
				}
				{
					document.getElementById("main2").removeAttribute("_echarts_instance_");
					var chartDom = document.getElementById("main2");
					var myChart = echarts.init(chartDom);
					myChart.clear();
					var option;

					option = {
						xAxis: {
							type: "category",
							data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
						},
						yAxis: {
							type: "value",
						},
						series: [
							{
								data: [120, 200, 150, 80, 70, 110, 130],
								type: "bar",
							},
						],
					};

					option && myChart.setOption(option);
				}
			};
			const f = new _(fn, 500);

			window.addEventListener("resize", () => {
				f.throttle();
			});
		};
	});
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
			border: 1px solid;
			height: 100%;
			min-width: 500px;
		}
		.main2 {
			border: 1px solid;
			height: 100%;
			min-width: 500px;
		}
	}
</style>
