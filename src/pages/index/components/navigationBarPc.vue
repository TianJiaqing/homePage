
<template>
	<!-- 顶部导航栏 -->
	<div class="navigation_bar_pc" @click="scaleBar">
		<ul>
			<li v-for="item in 5" :key="item">
				<span class="iconfont icon-menu"></span
				><span class="icon_text">{{ item }}文字</span>
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
</script>

<style scoped lang="less">
	.navigation_bar_pc {
		--width: 150px;
		--vis: inline;

		width: var(--width);
		background: linear-gradient(
			rgba(25, 202, 173, 0.6),
			rgba(25, 202, 173, 0.9),
			rgba(25, 202, 173, 0.4)
		);
		// background-color: #DC143C;
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
				&:hover {
					// background-color: ;
					// text-decoration: var(--vis);
				}
			}
		}
	}
	.iconfont {
		width: 40px;
		display: inline-block;
		text-align: center;
	}
</style>
