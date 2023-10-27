
<template>
	<div class="imgageContontent p_r" ref="imgageContontent">
		<img
			src="https://img0.baidu.com/it/u=3398816662,541852629&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
			alt=""
		/>
		<img
			src="https://img1.baidu.com/it/u=578877029,2626612357&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
			alt=""
			class="img_2"
		/>
	</div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
</script>

<style scoped lang="less">
	.imgageContontent {
		background-color: #000;
		// padding: 20px 0;
		img {
			width: 100%;
			padding: 15px;
            // height: 100%;
		}
		.max_wid_img {
			width: 100%;
			height: auto;
		}
		.img_2 {
			// height: 100%
		}
		.max_wid_img_div {
			width: 80%;
			margin: 0 auto;
		}
	}
</style>
