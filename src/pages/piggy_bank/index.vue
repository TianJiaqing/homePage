<template>
	<div class="piggy_bank">
		<div>
			<p class="title">
				<span class="date">7-27</span>
				<span class="expenditure">共支出：999元</span>
				<span class="expression">┭┮﹏┭┮明天又要吃土了</span>
			</p>
			<div class="info">
				<p>明细：</p>
				<ul>
					<li>买水，支出5元，</li>
					<li>买烤肠，支出2元，</li>
					<li>买面筋，支出10元，</li>
					<li>买内存条，支出100元，</li>
					<li>买面包，支出2元，</li>
					<li>买咖啡，支出50元。</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script setup>
</script>

<style scoped  lang="less">
	.piggy_bank {
		.title {
			.date {
				font-size: 30px;
			}
			.expenditure,
			.expression {
				font-family: serif;
			}
			.expression {
				margin-left: 15px;
			}
		}
		.info {
			padding: 20px;
			font-weight: 300;
			font-size: 14px;
			line-height: 25px;
		}
	}
</style>
