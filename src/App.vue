
<template>
	<div class="contain" v-waiting="loading">
		<waiting />
		<div class="d_f j_b main_contain">
			<navigationBarPc v-if="isPc" />
			<navigationBarMob v-else/>
			<div class="right scroll_full body_scroll_full" id="body_scroll_full">
				<router-view v-slot="{ Component }">
					<!-- <transition name="fade"> -->
						<component :is="Component" />
					<!-- </transition> -->
				</router-view>
			</div>
		</div>
	</div>
</template>
<script setup>
	import navigationBarPc from "@pages/index/components/navigationBarPc.vue";
	import navigationBarMob from "@pages/index/components/navigationBarMob.vue";
	import waiting from "@/components/card/waiting.vue";
	// import useAxios from '@utils/axios/index.js'
	import { onMounted, ref } from "vue";
	// const axiosUtil = useAxios()
	// console.log('axiosGet++.',axiosUtil.axiosGet.value);
	const isPc = ref(true);
	const width = document.scrollingElement.scrollWidth;
	if (width < 500) {
		isPc.value = false;
	}
	onMounted(() => {});
	const loading = ref(false);
</script>

<style scoped lang='less'>
	.contain {
		position: relative;
		z-index: 2;
		height: 100vh;
		overflow: hidden;
		.right {
			flex-grow: 1;
			height: 100vh;
			overflow-y: auto;
			overflow-x: hidden;
		}
	}

	/* 路由切换动画 */
	/* fade-transform */
	// .fade-leave-active,
	// .fade-enter-active {
	// 	transition: all 0.5s;
	// }

	// /* 可能为enter失效，拆分为 enter-from和enter-to */
	// .fade-enter-from {
	// 	opacity: 0;
	// 	transform: translateY(-30px);
	// }
	// .fade-enter-to {
	// 	opacity: 1;
	// 	transform: translateY(0px);
	// }

	// .fade-leave-to {
	// 	opacity: 0;
	// 	transform: translateY(30px);
	// }
</style>
