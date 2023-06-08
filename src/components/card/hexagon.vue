
<template>
	<!-- 六边形头像框 -->
	<div class="wrap">
		<div class="left common"></div>
		<div class="right common"></div>
	</div>
</template>
<script setup>
	import { onMounted, ref } from "vue";
	const props = defineProps({
		url: {
			type: String,
			default: "",
		},
	});
	const theme = {};
	const { url } = props;
	const imgUrl = ref("");
	theme.color = `url(${url})`;

	onMounted(() => {
		imgUrl.value = url;
		// const root = document.querySelector(":root");
		// root.setAttribute("style", `--url: url(${url})`);
	});
</script>

<style scoped >
	:root {
		--url: "@/assets/images/1.webp";
	}
	.wrap {
		height: 110px;
		width: 190px;
		position: relative;
		margin: 200px auto;
		background: v-bind("theme.color") 50% 50% no-repeat;
		/* background: var(--url) 50% 50% no-repeat; */

		background-size: auto 220px;
	}

	.common {
		position: absolute;
		height: 100%;
		width: 100%;
		overflow: hidden;
		left: 0;
	}

	.common:before {
		content: "";
		position: absolute;
		background: v-bind("theme.color");
		background-size: auto 220px;
		width: 190px;
		height: 220px;
	}

	.left {
		transform: rotate(60deg);
	}

	.left:before {
		transform: rotate(-60deg) translate(48px, -28px);
	}

	.right {
		transform: rotate(-60deg);
	}

	.right:before {
		transform: rotate(60deg) translate(48px, 28px);
		bottom: 0;
	}
</style>
