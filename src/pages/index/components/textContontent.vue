
<template>
	<!-- 首页主体之一：文本 -->
	<div class="text_contontent">
		<div class="left_div">
		</div>
		<div class="right_div">
			<div class="top_div">
			</div>
			<div class="bottom_div"></div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue";
</script>

<style scoped  lang='less'>
	.text_contontent {
		background-color: #444a5b;
		height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		> div {
			border-radius: 20px;
			// background-color: #fff;
			overflow: hidden;
			img {
				width: 100%;
			}
			overflow: hidden;
		}
		.left_div {
			width: 250px;
			height: 100%;
			margin-right: 20px;
			background-color: #000;
		}
		.right_div {
			width: 250px;
			height: 100%;
			.top_div {
				overflow: hidden;
				height: 60%;
			background-color: #000;

			}
			.bottom_div {
				height: 40%;
				background-color: #fff;
			}
		}
	}
</style>
