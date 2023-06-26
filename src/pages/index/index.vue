
<template>
	<div class="home_page">
		<banner v-if="show" />
		<textContontent v-if="show" />
		<imgageContontent />
		<!-- <div style="height: 800px"></div> -->
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
</style>
