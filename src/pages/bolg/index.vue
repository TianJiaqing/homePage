
<template>
	<div>
		<div class="bolg_title">
			<div class="btn_span j_c a_i" style="--color: #171717">
				<span class="iconfont icon-liebiao1"></span>
				<span class="title">默认布局</span>
			</div>
			<div class="btn_span j_c a_i" style="--color: #ff4141">
				<span class="iconfont icon-liebiao2"></span>
				<span class="title">小屏布局</span>
			</div>
			<div class="btn_span j_c a_i" style="--color: #a06eec">
				<span class="iconfont icon-fullscreen"></span>
				<span class="title">纯净布局</span>
			</div>
		</div>
		<card
			v-for="item in 15"
			:position="item % 2 === 0 ? 'left' : 'right'"
			:key="item"
		/>
	</div>
</template>
<script setup>
	import card from "./components/card.vue";
</script>

<style scoped lang="less">
	.bolg_title {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		height: 60px;
		background-color: #eee;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;
		.btn_span {
			margin: 0 5px;
			display: inline-flex;
			background-color: var(--color);
			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
			color: white;
			padding: 10px;
			border: 1px solid;
			cursor: pointer;
			transition: all 0.2s linear;
			width: 30px;
			height: 30px;
			border-radius: 20px;
			.iconfont {
				font-size: 10px;
			}
			.title {
				// display: none;
				width: 0px;
				white-space: nowrap;
				overflow: hidden;
				flex-grow: 0;
				font-size: 12px;
			}
			&:hover {
				width: 120px;
				border-radius: 20px;
				.title {
					flex-grow: 1;
					margin-left: 15px;
				}
			}
		}
	}
</style>
