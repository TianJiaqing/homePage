<template>
	<div class="container d_f j_c">
		<div class="card_div p_r d_f j_c a_i">
			<div class="card">
				<p class="title">WELCOME</p>
				<div class="input_div">
					<input type="text" placeholder="UserName" />
				</div>
				<div class="input_div">
					<input type="password" placeholder="Passworld" />
				</div>
				<div class="btn_div">
					<T-button color="#1E1E1E" padding="5px 15px" size="12px"
						>join</T-button
					>
				</div>
			</div>
			<div class="background_div p_a"></div>
		</div>
	</div>
</template>
<script setup>
	import { $confirm } from "@utils/vue_utils/vue_methods";
</script>
<style scoped lang='less'>
	.container {
		background-color: rgba(30, 30, 30, 1);
		height: 200vh;
		border: 2px solid;
		--width: 200px;
		--padding: 5px;
		--base-color: rgba(30, 243, 255, 1);

		.card_div {
			width: calc(var(--width) * 2);
			height: calc(var(--width) * 2);
			border-radius: 10px;
			box-shadow: 0px 3px 5px rgba(0, 21, 41, 1);
			overflow: hidden;
			.background_div {
				animation: animate 8s linear infinite;
				border-width: calc(var(--width) * 1.5);
				border-style: solid;
				border-top-color: var(--base-color);
				border-bottom-color: var(--base-color);
				border-left-color: #000;
				border-right-color: #000;
			}
			.card {
				border-radius: 10px;
				width: calc(var(--width) * 2 - var(--padding));
				height: calc(var(--width) * 2 - var(--padding));
				position: relative;
				z-index: 99;
				user-select: none;
				background-color: #000;
				color: #9f9f9f;
				.title {
					// font-weight: 300;
					text-align: center;
					line-height: 100px;
					font-size: 30px;
					color: var(--base-color);
				}
				input {
					color: #9f9f9f;
					background-color: transparent;
					line-height: 60px;
					height: 50px;
					font-size: 16px;
					width: 80%;
					outline: none;
					border: none;
					border-bottom: 2px solid var(--base-color);
				}
				.input_div {
					text-align: center;
					margin-bottom: 40px;
				}
				.btn_div {
					display: flex;
					justify-content: flex-end;
					padding: 0 2em;
					margin-left: 2em;
					font-size: 12px;
				}
			}
		}
	}
	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
