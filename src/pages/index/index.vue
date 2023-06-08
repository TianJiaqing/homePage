
<template>
	<div class="home_page">
		<banner />
		<div class="img_div">
			<!-- <hexagon url="src/assets/images/3.png" /> -->
		</div>
		<textContontent />
	</div>
</template>
<script setup>
	import hexagon from "@/components/card/hexagon.vue";
	import banner from "./components/banner.vue";
	import textContontent from "./components/textContontent.vue";
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
