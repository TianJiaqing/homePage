
<template>
	<div class="contain" v-waiting="loading">
		<waiting />
		<div class="d_f j_b">
			<navigationBarPc v-if="isPc"  />
			<div class="right scroll_full">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script setup>
	import navigationBarPc from "@pages/index/components/navigationBarPc.vue";
	import navigationBarMob from "@pages/index/components/navigationBarMob.vue";
	import waiting from "@/components/card/waiting.vue";
	import { onMounted, ref } from "vue";
	const isPc = ref(true);
	const width = document.scrollingElement.scrollWidth;
	if (width < 500) {
		isPc.value = false;
	}
	onMounted(() => {
		setTimeout(() => {
			loading.value = false;
		}, 2000);
	});
	const loading = ref(true);
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
