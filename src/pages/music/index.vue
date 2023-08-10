
<template>
	<div class="music d_f a_i j_c">
		<div class="contain">
			<div class="btn d_f a_i p_r">
				<T-button padding="15px" color="#333" @click="routerPush('/music/home')"
					>MUSIC</T-button
				>
			</div>
		</div>
	</div>
</template>
<script setup>
	import r from "_hook/router";
	const {
		routerPush = () => {
			console.warn("routerPush is loading");
		},
	} = r();
</script>

<style scoped lang="less">
	.music {
		width: 100%;
		height: 100%;
		.btn {
			width: 150px;
			height: 60px;
			text-align: center;
		}
	}
</style>
