
<template>
	<div class="bolg_detail d_f">
		<div class="right"></div>
		<div class="left">
			<p class="title">{{ bolg.title }}</p>
			<p class="detail">
				{{ bolg.detail }}
			</p>
		</div>
	</div>
</template>
<script setup>
	/**
	 * 文章id，换取文章内容
	 */
	import { ref, onMounted } from "vue";
	import {
		search_dom,
		clear_dom,
		dom_full_screen,
	} from "@utils/dom_animate/dom_full_screen.js";
	import img_url from "@/assets/images/2.jpg";
	import { onBeforeRouteLeave, useRoute } from "vue-router";
	const isExist = search_dom();
	if (!isExist) {
		const dom = document.createElement("div");
		const img = document.createElement("img");
		img.src = img_url;
		dom.appendChild(img);
		dom_full_screen(dom);
	}
	const bolg = ref({ title: "", detail: "", img_url: "" });
	onMounted(() => {
		get_info().then((res) => {
			const { title, img_url, detail } = res;
			bolg.value = { ...res };
		});
	});
	const get_info = () => {
		return new Promise((succ, fail) => {
			setTimeout(() => {
				const obj = {
					title: "不是，到底有多少种图片懒加载啊",
					detail:
						"不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊！！不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊！！不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊！！不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊不是，到底有多少种图片懒加载啊！！",
					img_url: img_url,
				};
				succ(obj);
			}, 1000);
		});
	};

	onBeforeRouteLeave(() => {
		clear_dom();
	});
</script>

<style scoped lang="less">
	.bolg_detail {
		.right {
			flex-grow: 1;
			overflow: hidden;
		}
		.left {
			padding: 0 20px;
			width: 70vw;
			.title {
				text-align: center;
				font-size: 24px;
				line-height: 60px;
				font-weight: 900;
			}
			.detail {
				text-indent: 2em;
				line-height: 35px;
				font-size: 16px;
				// font-family: YZCCQSXK;
			}
		}
	}
</style>
