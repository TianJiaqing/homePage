<template>
	<!-- v-waiting自定义指令 -->
	<div class="waiting_div">
		<div class="background_div">
			<span class="iconfont icon-jiazaidonghua"></span>
		</div>
	</div>
</template>
<script setup>
</script>

<style scoped lang="less">
	.waiting_div {
		visibility: hidden;
		position: fixed;
		.background_div {
			background-color: rgba(0, 0, 0, 0.4);
			opacity: 0.8;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			.iconfont {
				font-size: 50px;
				color: #297aff;
				animation: icon_rotate 1.5s ease-in-out infinite alternate-reverse;
			}
		}
	}
	@keyframes icon_rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(480deg);
		}
	}
</style>
