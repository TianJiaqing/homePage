
<template>
	<div ref="bolg_contain" class="bolg_contain">
		<div class="bolg_title">
			<div class="btn_span j_c a_i" style="--color: #171717">
				<span class="iconfont icon-liebiao1"></span>
				<span class="title">默认布局</span>
			</div>
			<div class="btn_span j_c a_i" style="--color: #ff4141">
				<span class="iconfont icon-liebiao2"></span>
				<span class="title">小屏布局</span>
			</div>
			<div
				class="btn_span j_c a_i"
				style="--color: #a06eec"
				@click="setLayout('domFull')"
			>
				<span class="iconfont icon-fullscreen"></span>
				<span class="title">纯净布局</span>
			</div>
		</div>
		<div>
			<transition-group name="card" tag="div" appear>
				<card
					v-for="(item, index) in 15"
					class="card_div"
					:style="{ '--index': index }"
					:position="item % 2 === 0 ? 'left' : 'right'"
					:key="item"
				/>
			</transition-group>
		</div>
	</div>
</template>
<script setup>
	import card from "./components/card.vue";
	import { setWebFull } from "@utils/dom_animate/dom_full_web.js";
	import { ref } from "vue";
	const layoutType = {
		domFull: setWebFull,
	};
	const bolg_contain = ref(null);
	const setLayout = (type) => {
		// const el = bolg_contain.value;
		// console.log(el);
		// layoutType[type](el);
	};
</script>

<style scoped lang="less">
	.bolg_contain {
		background-color: #fff;
		.bolg_title {
			position: sticky;
			top: 0;
			left: 0;
			width: 100%;
			height: 60px;
			background-color: #eee;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 99;
			.btn_span {
				margin: 0 5px;
				display: inline-flex;
				background-color: var(--color);
				box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
				color: white;
				padding: 10px;
				border: 1px solid;
				cursor: pointer;
				transition: all 0.2s linear;
				width: 30px;
				height: 30px;
				border-radius: 20px;
				.iconfont {
					font-size: 10px;
				}
				.title {
					// display: none;
					width: 0px;
					white-space: nowrap;
					overflow: hidden;
					flex-grow: 0;
					font-size: 12px;
				}
				&:hover {
					width: 120px;
					border-radius: 20px;
					.title {
						flex-grow: 1;
						margin-left: 15px;
					}
				}
			}
		}

		/* fade-transform */
		.card-leave-active,
		.card-enter-active {
			transition: all 1s;
		}

		/* 可能为enter失效，拆分为 enter-from和enter-to */
		.card-enter-from {
			transform: translateX(-100%);
			opacity: 0;
		}
		.card-enter-to {
			transform: translateX(0%);
			opacity: 1;
		}

		.card-leave-to {
			opacity: 0;
			transform: translateX(100%);
		}
		.card_div {
			transition-delay: calc(var(--index) * 0.4s);
		}
	}
</style>
