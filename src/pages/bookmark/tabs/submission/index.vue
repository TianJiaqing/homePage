<template>
	<div>
		<T-input v-model="name"></T-input>
	</div>
</template>
<script setup>
	import TInput from "./components/input.vue";
	import { ref } from "vue";
	const name = ref("");
</script>
<style scoped lang='less'>
</style>
