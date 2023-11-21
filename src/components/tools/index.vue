
<template>
	<div class="main" @mousemove="mousemove">
		<div class="round d_f a_i j_c" @click="change(1)">
			<span
				class="iconfont icon-guanbi1 close_span"
				:class="{ open: flg }"
			></span>
		</div>
		<div
			class="top common round d_f a_i j_c"
			:class="{ open_top: flg }"
			data-name="返回顶部"
			@click="change(2)"
		>
			<span>顶</span>
		</div>
		<div
			class="left common round d_f a_i j_c"
			:class="{ open_left: flg }"
			data-name="收起侧边栏"
			@click="change(3)"
		>
			<span>收</span>
		</div>
		<div
			class="left_top common round d_f a_i j_c"
			:class="{ open_left_top: flg }"
			data-name="主题切换"
			@click="change(4)"
		>
			<span>题</span>
		</div>
		<div
			class="mini_card"
			ref="mini_card"
			v-show="flg && title"
			@click="change"
		>
			{{ title }}
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue";

	const flg = ref(false);
	const mate = {
		1: () => {
			flg.value = !flg.value;
			clean_title();
		},
		2: () => {},
		3: () => {},
		4: () => {},
	};
	const change = (type) => {
		mate[type]();
	};

	const mini_card = ref(null);
	const title = ref(null);
	const clean_title = () => {
		title.value = null;
	};
	const mousemove = (e) => {
		const {
			target: {
				dataset: { name = null },
				offsetLeft,
				offsetTop,
			},
		} = e;
		if (name) {
			mini_card.value.style.top = `calc(${offsetTop}px - 1.5em)`;
			mini_card.value.style.left = `calc(${offsetLeft}px)`;
			title.value = name;
		}
	};
</script>

<style scoped lang='less'>
	.main {
		--time: 0.3s;
		--base: 70px;
		--index: 1;
		--color: #1d85ed;
		position: fixed;
		right: 30px;
		bottom: 20px;
		background-color: #fff;

		cursor: pointer;
		.iconfont {
			font-size: 12px;
		}
		.round {
			background-color: #fff;
			width: 40px;
			height: 40px;
			overflow: hidden;
			border-radius: 50%;
			border: 1px solid var(--color);
			color: var(--color);
		}
		.close_span {
			transform: rotate(0deg);
			transition: all var(--time) ease-out;
		}
		.open {
			transform: rotate(403deg);
		}
		.common {
			font-size: 12px;
			position: absolute;
			transition: all var(--time) ease-out;
			z-index: -1;
		}
		.top {
			left: 0;
			bottom: 0;
		}
		.open_top {
			bottom: var(--base);
			z-index: var(--index);
		}
		.left {
			right: 0;
			bottom: 0;
		}
		.open_left {
			right: var(--base);
			z-index: var(--index);
		}
		.left_top {
			right: 0;
			bottom: 0;
		}
		.open_left_top {
			right: calc(var(--base) / 5 * 4);
			bottom: calc(var(--base) / 5 * 4);
		}
		.mini_card {
			transition: all var(--time) ease-out;
			position: absolute;
			top: 0;
			left: 0;
			font-size: 12px;
			white-space: nowrap;
			z-index: calc(var(--index) + 1);
			color: var(--color);
		}
	}
</style>
