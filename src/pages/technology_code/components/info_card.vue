<template>
	<!-- 上方个人信息卡片 -->
	<div class="info_card">
		<div class="d_f a_i info_card_contain">
			<p>_咸鱼前端</p>
			<div class="div_img">
				<img src="@/assets/images/3.jpg" alt="" />
			</div>
		</div>
		<p @click="goToPage">
			<span>故不积跬步，</span>
			<span>无以至千里。</span>
		</p>
	</div>
</template>
<script setup>
	const goToPage = () => {
		window.open(
			"https://baike.baidu.com/item/%E4%B8%8D%E7%A7%AF%E8%B7%AC%E6%AD%A5/7871960?fr=ge_ala"
		);
	};
</script>

<style scoped lang="less">
	.info_card {
		position: relative;
		top: -60px;
		.div_img {
			width: 80px;
			height: 80px;
			border-radius: 5px;
			overflow: hidden;
			img {
				width: 100%;
			}
		}
		.info_card_contain {
			justify-content: flex-end;
			p {
				margin-right: 15px;
				color: white;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
			padding-right: 30px;
		}
		> p {
			cursor: pointer;
			text-align: right;
			margin-top: 15px;
			font-family: YZCCQSXK;
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
