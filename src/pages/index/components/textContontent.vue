
<template>
	<!-- 首页主体之一：文本 -->
	<div class="text_contontent">
		<ul>
			<li v-for="item in data" :key="item[0]">{{ item[0] }}</li>
		</ul>
	</div>
</template>
<script setup>
	import { ref } from "vue";
    //换成vue2，这是vue3
	const data = ref([
		["怀宛秋", "89", '<span style="color:#569CE1;">保洁</span>', "上午10点"],
		["杜初阳", "91", '<span style="color:#569CE1;">助浴</span>', "下午03点30"],
		["杨澈仁", "76", '<span style="color:#569CE1;">保洁</span>', "下午02点50"],
		["林乐易", "83", '<span style="color:#569CE1;">助医</span>', "下午03点10"],
		["若雁翠", "93", '<span style="color:#569CE1;">理发</span>', "上午09点"],
		["晋宛瑶", "78", '<span style="color:#569CE1;">助浴</span>', "下午02点15"],
		["汤寄南", "85", '<span style="color:#569CE1;">理发</span>', "下午01点30"],
		["亓冰海", "89", '<span style="color:#569CE1;">助医</span>', "上午09点30"],
		["代江远", "92", '<span style="color:#569CE1;">保洁</span>', "上午09点20"],
		["崔以冬", "98", '<span style="color:#569CE1;">助医</span>', "下午03点"],
		["农彬郁", "83", '<span style="color:#569CE1;">助浴</span>', "上午10点"],
		["张三", "79", '<span style="color:#569CE1;">保洁</span>', "下午2点"],
	]);
    //随机排序
	const randomSort = (arr) => {
		var result = [];
		while (arr.length > 0) {
			var randomIndex = Math.floor(Math.random() * arr.length);
			result.push(arr[randomIndex]);
			arr.splice(randomIndex, 1);
		}
		return result;
	};
    //调用定时器
	const fn = () => {
		setInterval(() => {
			data.value = randomSort([...data.value]);
		}, 1000 * 1);
	};
	fn();
</script>

<style scoped  lang='less'>
	.text_contontent {
		background-color: #e1d9c4;
		height: 400px;
	}
</style>
