
<template>
	<div class="card_contain d_f">
		<div class="text_contain d_f">
			<p class="title">{{ resData.title }}</p>
			<p class="detail d_f a_i j_c">{{ resData.detail }}</p>
		</div>
		<div class="target">
			<div class="target_after target_before">
				<img src="@/assets/images/2.jpg" alt="" />
			</div>
			<div class="target_after d_f j_c a_i">
				<p>{{ resData.url }}</p>
				<div class="btn_group d_f a_i">
					<div>
						<T-button padding="2px" color="red" @click="go_look">预览</T-button>
					</div>
					<div><T-button padding="2px" @click="go_to">跳转</T-button></div>
				</div>
			</div>
		</div>
		<!-- <iframe src="" frameborder="0"></iframe> -->
	</div>
</template>
<script setup>
	import { render, h } from "vue";
	// const d = h("div", {}, "render渲染的文本");

	const resData = {
		title: "百度一下，你就知道",
		detail:
			"全球最大的中文搜索引擎、致力于让网民更便捷地获取信息,找到所求。百度超过千亿的中文网页数据库,可以瞬间找到相关的搜索结果。",
		url: "https://www.baidu.com",
	};
	const go_to = () => {
		window.open("https://www.baidu.com");
	};
	const go_look = () => {
		// render(d, document.body);
		return;
		const web_iframe = document.querySelector(".web_iframe");
		let iframe = null;
		if (web_iframe) {
			iframe.src = "/api";
		} else {
			const app = document.querySelector("#app");
			app.classList.add("top_left_app");
			iframe = document.createElement("iframe");
			document.body.appendChild(iframe);
			iframe.src = "/api";
			iframe.classList.add("web_iframe");
		}
	};
</script>

<style scoped lang="less">
	// @import url("@/font_family/font_family.css");
	.card_contain {
		width: 200px;
		height: 400px;
		flex-direction: column;
		cursor: pointer;
		.title {
			text-align: center;
			background-color: #000;
			color: #fff;
			line-height: 40px;
		}
		.text_contain {
			flex-direction: column;
		}
		.detail {
			padding: 0 10px;
			flex-grow: 0;
			line-height: 30px;
			font-size: 12px;
			height: 120px;
			text-indent: 2em;
			overflow: hidden;
			text-overflow: ellipsis;
			/* 将对象作为弹性伸缩盒子模型显示 */
			display: -webkit-box;
			/* 限制在一个块元素显示的文本的行数 */
			/* -webkit-line-clamp 其实是一个不规范属性，使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；*/
			-webkit-line-clamp: 4;
			/* 设置或检索伸缩盒对象的子元素的排列方式 */
			-webkit-box-orient: vertical;
		}
		> div {
			height: 50%;
			border: 1px solid;
		}
		&:hover .target {
			transform: rotateY(180deg);
		}
		.target {
			transition: all 0.5s ease-in-out;
			position: relative;
			transform-style: preserve-3d;
			> div {
				position: absolute;
				background-color: white;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}
			.target_after {
				// font-family: RR;
				text-align: center;
				display: flex;
				flex-direction: column;
				transform: translateZ(-20px) rotateY(-180deg);
				p:hover {
					color: rgba(0, 0, 255, 0.8);
					text-decoration: underline;
				}
			}
			.target_before {
				transform: translateZ(20px);
				overflow: hidden;
				img {
					width: 100%;
				}
			}
		}
		.btn_group {
			width: 100%;
			padding: 20px 0;
			justify-content: space-evenly;
			div {
				width: 80px;
			}
		}
	}
</style>
