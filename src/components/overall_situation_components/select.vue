
<template>
	<div class="select">
		<div class="val_div" @click="chan">请选择</div>
		<div class="option_div" :class="{ option_div_focus: flg }" ref="option_div">
			<div>1</div>
			<div>2</div>
			<div>3</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue";

	const flg = ref(false);
	const option_div = ref(null);
	const chan = () => {
		flg.value = !flg.value;
		setTimeout(() => {
			const height = option_div.value.offsetHeight;
			option_div.value.style.height = 0 + "px";
			option_div.value.style.height = height + "px";
		}, 10);
	};
</script>
<style scoped lang='less'>
	.select {
		position: relative;
		.option_div {
			top: calc(1.6em + 1px);
			position: absolute;
			z-index: 99;
			width: 200px;
			transition: height 0.2s ease-in-out;
			height: 0%;
			overflow: hidden;
			background-color: #fff;
			div {
				border: 1px solid;
				padding: 0.3em 1em;
			}
		}
		.option_div_focus {
			height: auto;
		}
		.val_div {
			line-height: 1.6em;
			border: 1px solid;
		}
	}
</style>
