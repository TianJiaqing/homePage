<template>
	<!-- button组件，之所以用div来替代button是因为button有个获取焦点的样式很烦人 -->
	<div class="btn" ref="btn">
		<slot></slot>
		<span></span>
	</div>
</template>
<script setup>
	import { onMounted, ref } from "vue";
	const prop = defineProps({
		color: {
			type: String,
			default: "blue",
		},
	});
	const btn = ref(null);
	onMounted(() => {
		const { color } = prop;
		btn.value.style = `--color:${color}`;
	});
</script>


<style scoped lang="less">
	.btn {
		--color: blue;
		border: none;
		display: block;
		position: relative;
		padding: 10px 35px;
		font-size: 18px;
		background: white;
		cursor: pointer;
		user-select: none;
		overflow: hidden;
		color: var(--color);
		z-index: 1;
		font-family: inherit;
	}

	.btn span {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		z-index: -1;
		border: 3px solid var(--color);
	}

	.btn span::before {
		content: "";
		display: block;
		position: absolute;
		width: 8%;
		height: 500%;
		background: white;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-60deg);
		transition: all 0.3s;
	}

	.btn:hover span::before {
		transform: translate(-50%, -50%) rotate(-90deg);
		width: 100%;
		background: var(--color);
	}

	.btn:hover {
		color: white;
	}

	.btn:active span::before {
		background: var(--color);
	}
</style>
