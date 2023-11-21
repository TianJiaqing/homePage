
<template>
	<div class="echarts_content">
		<div id="main1" class="main1"></div>
		<div id="main2" class="main2"></div>
		<div id="main3" class="main3"></div>
	</div>
</template>
<script setup>
	import { onMounted } from "vue";
	import _ from "_hook/js_utils";
	import $E from "_hook/echarts";
	onMounted(() => {
		const init = () => {
			{
				// const dom = document.querySelector(".echarts_content")
				// dom.style.height = dom.offsetWidth * 1 +"px"
			}
			{
				const dom = document.getElementById("main1");
				dom.style.height = dom.offsetWidth * .5 +"px"
				$E(dom, {
					// backgroundColor: "#100C2A",
					xAxis: {
						type: "category",
						data: [
							"吴彦祖",
							"彭于晏",
							"迪丽热巴",
							"古力娜扎",
							"李四",
							"张三",
							"蔡徐坤",
						],
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
				});
			}
			{
				const dom = document.getElementById("main2");
				dom.style.height = dom.offsetWidth * .5 +"px"
				$E(dom, {
					title: {
						text: "当红明星的某某内容统计",
						subtext: "(虚构数据)",
						left: "center",
					},
					tooltip: {
						trigger: "item",
					},
					legend: {
						orient: "vertical",
						left: "left",
					},
					series: [
						{
							name: "虚构数据",
							type: "pie",
							radius: "50%",
							data: [
								{ value: 1048, name: "蔡徐坤" },
								{ value: 735, name: "迪丽热巴" },
								{ value: 580, name: "吴彦祖" },
								{ value: 484, name: "彭于晏" },
								{ value: 300, name: "古力娜扎" },
							],
							emphasis: {
								itemStyle: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: "rgba(0, 0, 0, 0.5)",
								},
							},
						},
					],
				});
			}
			{
				const dom = document.getElementById("main3");
				dom.style.height = dom.offsetWidth * .5 +"px"

				$E(dom, {
					xAxis: {
						type: "category",
						data: [
							"吴彦祖",
							"彭于晏",
							"迪丽热巴",
							"古力娜扎",
							"李四",
							"张三",
							"蔡徐坤",
						],
					},
					yAxis: {
						type: "value",
					},
					series: [
						{
							data: [120, 200, 150, 80, 70, 110, 130],
							type: "bar",
							showBackground: true,
							backgroundStyle: {
								color: "rgba(180, 180, 180, 0.2)",
							},
						},
					],
				});
			}
		};
		init();
		const f = new _(init, 200);
		window.addEventListener("resize", () => {
			f.debounce();
		});
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
