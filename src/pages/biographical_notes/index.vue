
<template>
	<div class="biographical_notes">
		<div class="font_contain" @mousemove="fn">
			<div>
				<div></div>
			</div>
			<div>
				<div></div>
			</div>
			<div>
				<div></div>
			</div>
			<div>
				<div></div>
			</div>
		</div>
		<div style="height: 300px"></div>
	</div>
</template>
<script setup>
	import util from "@/utils/hook/js_utils";
	const _ = new util((e) => {
		console.log("eee=>>>", e);
	});
	const fn = (e) => {
		_.throttle(e);
	};
</script>

<style scoped lang="less">
	// .biographical_notes{
	// 	transform: rotateX(-40deg);
	// }
	.font_contain {
		cursor: pointer;
		margin: 0 auto;
		margin-top: 40px;
		width: 400px;
		height: 40px;
		transform-style: preserve-3d;
		transform: rotateX(-8deg) rotateY(25deg);
		> div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transform-origin: center center;
			background-color: rgba(218, 213, 213, 0.8);
			opacity: 0.6;
			> div {
				width: 20%;
				background-color: rgba(100, 100, 100, 0.5);
				height: 100%;
				transition: all 1s linear;
			}
			> div:nth-child(1) {
				background-color: rgba(100, 100, 100, 0.6);
			}
			> div:nth-child(2) {
			}
			> div:nth-child(3) {
				background-color: rgba(100, 100, 100, 0.55);
			}
			> div:nth-child(4) {
				background-color: rgba(100, 100, 100, 0.4);
			}
		}
		> div:nth-child(1) {
			transform: translateZ(20px);
		}
		> div:nth-child(2) {
			transform: translateY(-20px) rotateX(90deg);
		}
		> div:nth-child(3) {
			transform: rotateX(90deg) translateZ(-20px);
		}
		> div:nth-child(4) {
			transform: translateZ(-20px);
		}
	}
</style>
