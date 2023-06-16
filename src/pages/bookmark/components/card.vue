
<template>
	<div class="card_contain d_f">
		<div class="title">某某标签题目一</div>
		<div class="target">
			<div class="target_before">标签正面内容</div>
			<div class="target_after d_f j_c a_i">
				<p @click="go_to">https:www.baidu.com</p>
			</div>
		</div>
	</div>
</template>
<script setup>
	const go_to = () => {
		// const app = document.querySelector("#app");
		// app.classList.add("top_left_app");
	};
</script>

<style scoped lang="less">
	// @import url("@/font_family/font_family.css");
	.card_contain {
		width: 200px;
		height: 400px;
		border: 1px solid;
		flex-direction: column;
		cursor: pointer;
		> div {
			height: 50%;
			border: 1px solid;
		}
		&:hover .target {
			transform: rotateY(180deg);
		}
		.target {
			transition: all 0.5s ease-in-out;
			position: relative;
			transform-style: preserve-3d;
			> div {
				position: absolute;
				background-color: white;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}
			.target_after {
				font-family: RR;
				text-align: center;
				transform: translateZ(-20px) rotateY(-180deg);
				p:hover {
					color: rgba(0, 0, 255, 0.8);
					text-decoration: underline;
				}
			}
			.target_before {
				transform: translateZ(20px);
			}
		}
	}
</style>
