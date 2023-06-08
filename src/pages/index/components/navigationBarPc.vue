
<template>
	<!-- 顶部导航栏 -->
	<div class="navigation_bar_pc" @click="scaleBar">
		<ul>
			<li v-for="({ title, icon }, index) in list" :key="index">
				<span :class="icon" class="iconfont"></span>
				<span class="icon_text">{{ title }}</span>
			</li>
		</ul>
	</div>
</template>
<script setup>
	let num = 1;
	const scaleBar = () => {
		num++;
		const root = document.querySelector(".navigation_bar_pc");
		if (num % 2 == 0) {
			root.setAttribute("style", "--width:70px;--vis:none;");
		} else {
			root.setAttribute("style", "--width:150px;--vis:inline;");
		}
	};

	const list = [
		{
			title: "一个首页",
			icon: "icon-iconhuaban1-15",
		},
		{
			title: "科技感",
			icon: "icon-keji",
		},
		{
			title: "qiuzhi",
			icon: "icon-jianli",
		},
		{
			title: "BOLG",
			icon: "icon-boke1",
		},
	];
</script>

<style scoped lang="less">
	.navigation_bar_pc {
		--width: 150px;
		--vis: inline;

		width: var(--width);
		// background: linear-gradient(
		// 	rgba(25, 202, 173, 0.6),
		// 	rgba(25, 202, 173, 0.9),
		// 	rgba(25, 202, 173, 0.4)
		// );
		background-color: #fff;
		transition: width 0.5s ease-in-out;
		height: 100vh;
		.icon_text {
			display: var(--vis);
		}
		ul {
			cursor: pointer;
			// background-color: #19CAAD;
			// 25 202 173

			color: white;
			li {
				white-space: nowrap;
				padding: 15px;
				color: #000;
				&:hover {
					color: #000000;
					text-decoration: underline;
				}
				span {
					line-height: 20px;
				}
			}
		}
	}
	.iconfont {
		width: 40px;
		display: inline-block;
		text-align: center;
		font-size: 20px;
	}
</style>
