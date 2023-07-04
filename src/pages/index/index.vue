
<template>
	<div class="home_page">
		<banner v-if="show" />
		<textContontent v-if="show" />
		<transition name="fade">
			<imgageContontent v-animate="'animate_show'" />
		</transition>
		<div style="height: 800px"></div>
		<!-- <introduce /> -->
	</div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
	import hexagon from "@/components/card/hexagon.vue";
	import banner from "./components/banner.vue";
	import imgageContontent from "./components/imgageContontent.vue";
	import textContontent from "./components/textContontent.vue";
	import introduce from "./components/introduce.vue";
	const show = ref(true);
</script>

<style scoped  lang="less">
	.home_page {
		.img_div {
			height: 350px;
			display: flex;
			align-items: center;
			// background-color: #BDB5AA;
			justify-content: center;
		}
	}
	.fade-leave-active,
	.fade-enter-active {
		transition: all 0.5s;
	}
	.fade-enter-from {
		opacity: 0;
		transform: translateY(-30px);
	}
	.fade-enter-to {
		opacity: 1;
		transform: translateY(0px);
	}

	.fade-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
	.animate_show {
		position: relative;
		animation: animate_show 1s ease-out forwards;
	}
	@keyframes animate_show {
		from {
			transform: translateY(100%);
			opacity: 0.1;
		}
		to {
			// transform: scale(1.5);
			transform: translateY(0%);

			opacity: 1;
		}
	}
</style>
