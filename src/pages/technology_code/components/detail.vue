<template>
	<!-- 详细 -->
	<div class="detail p_f t0_l0 d_f a_i j_c">
		<div>
			<div class="head_icon d_f j_b p_r">
				<ul>
					<li style="--color: #000"></li>
					<li style="--color: #dd5145"></li>
					<li style="--color: #1aa15f"></li>
				</ul>
				<span
					class="iconfont icon-guanbi"
					@click="$emit('close_details')"
				></span>
			</div>
			<div class="content">
				<p>
					{{ data.detail }}
				</p>
				<div class="img_content">
					<div
						class="img_div"
						v-for="(item, index) in data.img_url"
						:key="index"
					>
						<img src="@/assets/images/2.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	const data = {
		img_url: ["@/assets/images/2.jpg", 2, 3],
		msg_type: 1,
		detail:
			"xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是",
		data: "2023-01-04",
	};
	const props = defineProps({
		id: {
			type: [Number, String],
			default: "1",
		},
	});
</script>

<style scoped lang="less">
	.detail {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.2);
		cursor: pointer;
		> div {
			cursor: default;
			width: 50vw;
			height: 80vh;
			border-radius: 5px;
			background-color: #fff;
			.head_icon {
				height: 20px;
				padding: 20px 15px;
				align-items: center;
				//标题下方下划线
				&::after {
					content: "";
					display: block;
					position: absolute;
					bottom: 10px;
					width: 10%;
					height: 2px;
					left: 50%;
					transform: translateX(-50%);
					background-color: #666;
				}
				ul {
					display: flex;
				}
				li {
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background-color: var(--color);
					margin-right: 5px;
					cursor: pointer;
				}
				span {
					cursor: pointer;
				}
			}
			.content {
				height: calc(80vh - 40px);
				padding: 15px;
				overflow-y: auto;
				overflow-x: hidden;
				> p {
					text-indent: 2em;
					font-size: 15px;
					font-weight: 400;
					line-height: 20px;
					font-family: "KaiTi";
				}
				.img_content {
					display: flex;
					margin-top: 20px;
					flex-wrap: wrap;
					.img_div {
						width: 200px;
						flex-grow: 1;
						height: 200px;
						margin: 5px;
						overflow: hidden;
						img {
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>
