
<template>
	<!-- 轮播图 -->
	<div class="banner">
		<canvas id="canvas"></canvas>
		<div class="text_contain j_c d_f a_i">
			<div class="head_sculpture">
				<img src="@/assets/images/3.jpg" alt="" />
			</div>
			<p class="title">_咸鱼前端</p>
			<p class="poem">
				<span>故不积跬步，</span>
				<span>无以至千里。</span>
			</p>
		</div>
		<div class="to_bottom">
			<div class="to_bottom_contain" @click="to_bottom">
				<span class="iconfont icon-xia"></span>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
	//滚动速度
	const speed = 50;
	//per_canvas 控制波浪纹占比，当前占70%
	const per_canvas = 0.7;
	let font_length = 0;
	onMounted(() => {
		const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = document.querySelector(".banner").offsetWidth;
		canvas.height = document.querySelector(".banner").offsetHeight;
		const height_top = canvas.height / per_canvas;
		//step 随时间变化，不断增加，控制曲线变化幅度的主要变量
		let step = 0;
		loop(ctx, canvas, height_top, step);
	});
	//绘制波浪纹
	/**
	 * ctx 画笔
	 * canvas 画布
	 * height_top 画布高度
	 * step  变化幅度
	 */
	const loop = (ctx, canvas, height_top, step) => {
		canvas.width = document.querySelector(".banner").offsetWidth;
		//清空canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		step += 1;
		for (let i = 1; i < 4; i++) {
			ctx.fillStyle = `rgba(255,255,255,.${i * 3})`;
			const angle = ((step + (i * 360) / 3) * Math.PI) / 180;
			const deltaHeight = Math.sin(angle) * 50;
			const deltaHeightRight = Math.cos(angle) * 50;
			ctx.beginPath();
			ctx.moveTo(0, height_top / 2 + deltaHeight);
			ctx.bezierCurveTo(
				canvas.width / 2,
				height_top / 2 + deltaHeight - 50,
				canvas.width / 2,
				height_top / 2 + deltaHeightRight - 150,
				canvas.width,
				height_top / 2 + deltaHeightRight
			);
			ctx.lineTo(canvas.width, height_top);
			ctx.lineTo(0, height_top);
			ctx.lineTo(0, height_top / 2 + deltaHeight);
			ctx.closePath();
			ctx.fill();
		}
		requestAnimationFrame(function () {
			loop(ctx, canvas, height_top, step);
		});
	};
	// 点击按钮滚动至下一个元素展示位置
	const to_bottom = () => {
		const dom = document.querySelector(".body_scroll_full");
		const client_dom = dom.getBoundingClientRect();
		const { top, bottom } = client_dom;
		scroll_animate(dom, speed, bottom, bottom);
	};
	/**
	 * el 滚动元素
	 * speed 滚动速度
	 * height 剩余滚动高度
	 * current_height 当前总需滚动高度
	 */
	const scroll_animate = (el, speed, height, current_height) => {
		console.log('确定');
		if (height <= 0) {
			el.scrollTop = current_height;
			return;
		}
		el.scrollTop += speed;
		height -= speed;
		requestAnimationFrame(() =>
			scroll_animate(el, speed, height, current_height)
		);
	};
</script>

<style scoped lang="less">
	.banner {
		--wid: 150px;
		height: 100vh;
		position: relative;
		background-color: #3a4189;
		// background: url("@/assets/images/background3.webp");
		// background-size:100%  auto ;
		.text_contain {
			position: absolute;
			flex-direction: column;
			top: 40px;
			left: 50%;
			transform: translateX(-50%);
			.head_sculpture {
				width: var(--wid);
				border-radius: 50%;
				overflow: hidden;
				height: var(--wid);
				img {
					width: 100%;
				}
				box-shadow: 0px 0px 9px 16px rgba(0, 0, 0, 0.1);
			}
			color: white;

			.poem {
				font-size: 20px;
				font-family: YZCCQSXK;
				display: flex;
				flex-wrap:no-wrap;
				span{
					white-space: nowrap;
				}
			}
			.title {
				font-size: 25px;
				line-height: 30px;
				padding: 15px 0;
				text-align: center;
			}
		}
		.to_bottom {
			color: #000;
			position: absolute;
			bottom: 30px;
			animation: to_bttom 0.8s infinite ease-in-out alternate-reverse;
			width: 100%;
			text-align: center;
			.to_bottom_contain {
				padding: 10px;
				display: inline-block;
			}
			.iconfont {
				font-size: 20px;
				cursor: pointer;
			}
		}
	}
	/*光标闪烁动画*/
	@keyframes flicker {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	/*提示滚动动画*/
	@keyframes to_bttom {
		0% {
			bottom: 30px;
		}

		100% {
			bottom: 10px;
		}
	}
</style>
