
<template>
	<div class="introduce" ref="introduce">
		<audio
			ref="audio"
			src="src/assets/music/2.mp3"
			autoplay
			controls
			loop="loop"
		></audio>
		<div class="music_div">
			<div class="music_image">
				<div class="music_block abs_center"></div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
</script>

<style scoped lang="less">
	.introduce {
		height: 500px;
		border: 1px solid;
		audio {
			border: 1px solid;
		}
		.music_div {
			width: 100%;
			.music_image {
				position: relative;
				width: 150px;
				border: 1px solid;
				border-radius: 50%;
				overflow: hidden;
				height: 150px;
				margin: 0 auto;
			}
			.music_block {
				position: absolute;
				width: 30px;
				height: 30px;
				border: 1px solid;
				border-radius: 50%;
				overflow: hidden;
			}
		}
	}
</style>
