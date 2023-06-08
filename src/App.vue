
<template>
	<div class="contain">
		<!-- <navigationBarPc v-if="isPc" /> -->
		<!-- <navigationBarMob v-else /> -->
		<div class="d_f j_b">
			<navigationBarPc v-if="isPc" />
			<div class="right scroll_full">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script setup>
	import navigationBarPc from "@pages/index/components/navigationBarPc.vue";
	import navigationBarMob from "@pages/index/components/navigationBarMob.vue";

	import { onMounted, ref } from "vue";
	const isPc = ref(true);
	onMounted(() => {
		const width = document.scrollingElement.scrollWidth;
		if (width < 500) {
			isPc.value = false;
		}
	});
</script>

<style scoped lang='less'>
	.contain {
		height: 100vh;
		overflow: hidden;
		.right {
			flex-grow: 1;
			height: 100vh;
			overflow-y: auto;
		}
	}
</style>
