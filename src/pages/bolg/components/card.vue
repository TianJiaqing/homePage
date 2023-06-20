
<template>
	<div class="img_card" ref="img_card">
		<div class="img_div" :class="{ load_img: !imgFlg }" ref="img_div">
			<img src="@/assets/images/2.jpg" alt="" ref="img" loading="lazy" />
		</div>
		<div class="title_div d_f j_c p_r">
			<p class="title text_overflow">不是，到底有多少种图片懒加载啊</p>
			<p class="detail">
				不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊！！
			</p>
			<div class="hover_div p_a d_f j_c a_i">
				<div>
					<T-button color="#333" @click="to_detail">查看</T-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { onMounted, ref } from "vue";
	import err_img from "@/assets/images/img_loading.gif";
	import { dom_full_screen } from "@utils/dom_animate/dom_full_screen.js";
	import r from "_hook/router.js";
	const { routerPush } = r();
	/**
	 * params 图片信息 、文字信息
	 * position 图片展示位置，right右边，left左边
	 */

	const prop = defineProps({
		params: {
			type: Object,
			default: () => ({}),
		},
		position: {
			type: String,
			default: "right",
		},
	});
	const imgFlg = ref(false);
	const img_card = ref(null);
	const img_div = ref(null);
	const img = ref(null);
	const { position, params } = prop;
	onMounted(() => {
		const dom = img.value;

		dom.onload = () => {
			imgFlg.value = true;
			dom.onerror = null;
			dom.onload = null;
		};
		if (position == "right") {
			img_card.value.style = "--order:2";
		}
		dom.onerror = () => {
			dom.src = err_img;
			dom.onerror = null;
			dom.onload = null;
		};
	});
	const to_detail = () => {
		const dom = img_div.value;
		const { top, left, bottom, right } = dom.getBoundingClientRect();
		const width = dom.clientWidth;
		const height = dom.clientHeight;
		dom_full_screen(dom, { top, left, bottom, right, width, height });
		routerPush({
			path: "/bolg_detail",
		});
	};
</script>

<style scoped lang="less">
	.img_card {
		display: flex;
		justify-content: center;
		margin: 20px auto;
		--order: 1;
		cursor: pointer;
		.img_div {
			overflow: hidden;
			background-color: #eee;
			width: 400px;
			height: 300px;
			order: var(--order);
			img {
				width: 100%;
			}
		}
		.load_img {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.title_div {
			width: 500px;
			height: 300px;
			order: 1;
			flex-direction: column;
			border: 2px solid;
			p {
				padding: 10px 20px;
			}
			.title {
				text-align: center;
				font-size: 24px;
				line-height: 40px;
			}
			.detail {
				text-indent: 2em;
				line-height: 30px;
				font-size: 18px;
				font-family: YZCCQSXK;
			}
		}
		.hover_div {
			position: absolute;
			background-color: rgba(0, 0, 0, 0.8);
			width: 100%;
			height: 100%;
			opacity: 0;
			transition: opacity 0.2s linear;
			> div {
				padding: 3px;
				background-color: white;
			}
		}
		&:hover .hover_div {
			opacity: 1;
		}
		&:hover .title_div {
			// border: 2px solid transparent;
		}
	}
</style>
