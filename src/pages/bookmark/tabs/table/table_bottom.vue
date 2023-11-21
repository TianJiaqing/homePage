
<template>
	<div class="table_bottom" @click="change">
		<div data-type="1" :class="{ div_disabled: val == 1 }">《</div>
		<div
			v-for="item in num"
			:key="item"
			:class="{ table_bottom_focus: val == item }"
			data-type="2"
			:data-num="item"
		>
			{{ item }}
		</div>
		<div data-type="3" :class="{ div_disabled: val == num }">》</div>
		<div>共{{ num }}页，{{ count }}条数据</div>
	</div>
	<!-- <T-select></T-select> -->
</template>
<script setup>
	import { ref } from "vue";

	const props = defineProps({});

	const emit = defineEmits(["change"]);
	//总数
	const count = 21;
	//每页展示数量
	const per = 5;

	let num = Math.ceil(count / per);
	let val = ref(1);
	const change = (e) => {
		try {
			const type = e.target.dataset.type;
			if (type) {
				let res = {
					1: () => {
						val.value > 1 && val.value--;
					},
					2: () => {
						const num = e.target.dataset.num;
						val.value = num;
					},
					3: () => {
						val.value < num && val.value++;
					},
				};
				res[type]();
				emit("change", val.value);
			}
		} catch (error) {}
	};
</script>

<style scoped lang='less'>
	.table_bottom {
		--color: #409eff;
		font-family: YZCCQSXK;
		display: flex;
		align-items: center;
		> div {
			cursor: pointer;
			margin: 0 5px;
			width: 20px;
			height: 20px;
			color: var(--color);
			border: 1px solid var(--color);
			border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		> div:last-child {
			width: auto;
			padding: 0 10px;
			border: none;
			font-size: 12px;
			color: #000;
		}
		.table_bottom_focus {
			background-color: var(--color);
			color: #fff;
		}
		.div_disabled {
			cursor: not-allowed;
		}
	}
</style>
