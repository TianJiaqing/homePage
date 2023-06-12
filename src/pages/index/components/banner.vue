
<template>
	<!-- 轮播图 -->
	<div class="banner">
		<canvas id="canvas"></canvas>
		<div class="text_contain j_c d_f a_i">
			<div class="head_sculpture">
				<img src="@/assets/images/3.jpg" alt="" />
			</div>
			<p class="title">_咸鱼前端</p>
			<p class="poem">故不积跬步，无以至千里。</p>
		</div>
		<div class="to_bottom"><span class="iconfont icon-xia"></span></div>
		<p class="typewriting">
			<span class="typewriting_text" ref="typewriting_text"></span>
		</p>
	</div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
	const text = "该怎么去形容你最贴切？";
	const typewriting_text = ref(null);
	let font_length = 0;
	onMounted(() => {
		const dom = typewriting_text.value;
		const set_font = setInterval(() => {
			// console.log(dom.innerTex);
			if (font_length < text.length) {
				dom.innerText = dom.innerText + text[font_length];
				font_length++;
			} else {
				clearInterval(set_font);
			}
		}, 800);

		const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = document.querySelector(".banner").offsetWidth;
		canvas.height = document.querySelector(".banner").offsetHeight;
		const height_top = canvas.height / 0.7;

		let step = 0;

		loop(ctx, canvas, height_top, step);
	});
	const loop = (ctx, canvas, height_top, step) => {
		canvas.width = document.querySelector(".banner").offsetWidth;

		//清空canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		step += 2;
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
</script>

<style scoped lang="less">
	.banner {
		--wid: 150px;
		height: 100vh;
		position: relative;
		background-color: #3a4189;
		// background: url("@/assets/images/background3.webp");
		// background-size:100%  auto ;
		.typewriting {
			&::after {
				content: "Ⅰ";
				font-size: 18px;
				display: inline-block;
				vertical-align: top;
				font-weight: lighter;
				animation: flicker 0.6s infinite;
			}
		}
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
				font-size: 16px;
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
