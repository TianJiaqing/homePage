<template>
	<div class="biographical_notes">
		<div class="info_card">
			<div class="info_name">_咸鱼前端</div>
			<div class="info_base">
				<p>___个人简介___</p>
				<ul>
					<li>01后</li>
					<li>程序员</li>
					<li>目前在南京工作</li>
					<li>做什么都喜欢，但很难坚持下去</li>
					<li>915326916@qq.com</li>
				</ul>
			</div>
			<div class="info_base">
				<p>___梦想___</p>
				<ul>
					<li>我要成为一名改变世界的程序员(超大声)。</li>
				</ul>
			</div>
		</div>
		<div class="title_card">
			<p class="title">码农</p>
			<ul>
				<li>富含两年码龄摸鱼经验。</li>
				<li>掌握各种姿势的console.log、debugger、System.out.print。</li>
				<li>曾在公司屎山代码竞赛中，含泪拿下榜首。</li>
				<li>习得各种需求的反驳。</li>
				<li>坚持“代码能运行，绝对不变动”的理论思想。</li>
			</ul>
		</div>
		<div class="title_card">
			<p class="title">爱好</p>
			<ul>
				<li class="play_ps">超级喜欢打游戏</li>
			</ul>
		</div>
		<div class="title_card">
			<p class="title">颠簸的小半生</p>
			<ul>
				<li>
					悲哀的是，两年疫情耽搁的大学生活(很快啊，啪的一下，就出来实习了)。
				</li>
				<li>幸运的是，程序猿是我刚入大学时就明确的目标。</li>
				<li>
					天上掉馅饼，入坑编程后，学的很快，也对此很感兴趣(没办法，天赋太高，老天爷赏饭)。
				</li>
				<li>
					天上掉馅饼，每次我找工作的时候都很幸运，几乎无波澜，顺风顺水的入职。
				</li>
				<li>很悲哀的是，尚未吃到互联网红利，就听到了互联网已死的消息。</li>
				<li>很悲哀的是，我喜欢做每一件事情，但几乎都是半途而废。</li>
				<li>
					很悲哀的是，近段时间技术上感觉不到增长了(太懒了)，因此手写这个bolg系统的所有的BUG，鞭挞一下自己。
				</li>
				<li>
					很悲哀的是，南京这边房价均价在3w一平，按照我的薪资来算，不吃不喝只需要30-40年就能拿下，良心！！
				</li>
				<li>很悲哀的是，我需要吃喝，因此大概需要90-100年才能拿下，良心！！</li>
				<li>
					很悲哀的是，至今还不清楚自己未来的定位，是主攻技术，成为it界的阮一峰，还是面向客户，还是说撑到35，便告别代码，黄袍加身，转战美团。
				</li>
				<li>
					很幸运的是，性格不算孤僻，无沟通障碍，无身体缺陷，家里人都很健康。
				</li>
			</ul>
		</div>
		<div class="title_card">
			<p class="title">关于这个系统</p>
			<ul>
				<li>做系统的初衷：</li>
				<li>毫不避讳的说，为了装*。</li>
				<li>隐晦的说，要磨练技术，技术增长的太慢了。</li>
			</ul>
			<ul>
				<li>技术选型：</li>
				<li>运用的技术，三剑客、vue3、axios。</li>
			</ul>
		</div>
		<div class="title_card">
			<p class="title">
				联系我、讨口饭<span class="contact_span" @click="change_show_dialog"
					>联系方式</span
				>
			</p>
			<ul>
				<li class="introduce_ps">
					1、如果您对您的项目的前景很有信心，可以联系我(免费出力)。
				</li>
				<li class="contact_ps">
					2、如果您想聘用一个兼职选手或者您有一些项目资源，可以联系我。
				</li>
				<li>补充，周末与周六全天均空闲。</li>
				<li>
					3、如果您发现了该程序上的一个BUG，可以联系我，但我除了以身相许之外，就没有其它的回报方式了。
				</li>
				<li>4、如果上诉的语言影响了您的心情，请联系我，我尽量修改不适内容。</li>
				<li>5、如果你想无理取闹的话，也请联系我，我把你拉黑。</li>
			</ul>
		</div>
		<div class="img_div">
			<img src="@/assets/images/5.jpg" alt="" />
		</div>
		<transition name="fade">
			<T-dialog v-if="show_dialog">
				<template #footer>
					<div class="dialog_footer">
						<button class="no_btn">不行</button>
						<button @click="closeDialog(2)">准奏</button>
					</div>
				</template>
			</T-dialog>
		</transition>
		<div style="height: 200px"></div>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	const show_dialog = ref(false);
	const change_show_dialog = () => {
		show_dialog.value = true;
	};
	const closeDialog = (val) => {
		if (val == 2) {
			show_dialog.value = false;
		}
	};
</script>
<style lang="less" scoped>
	.biographical_notes {
		.info_card {
			.info_name {
				font-size: 25px;
				line-height: 50px;
				font-family: serif;
				text-align: right;
				padding-right: 2em;
			}
			.info_base {
				text-align: center;
				line-height: 25px;
				font-family: serif;
				> p {
					text-align: left;
					padding-left: 2em;
				}
				> ul {
				}
			}
		}
		.title_card {
			font-family: KaiTi;
			padding: 20px 0;
			padding-bottom: 5px;
			.contact_span {
				font-size: 20px;
				text-decoration: underline;
				color: rgb(69, 69, 187);
				cursor: pointer;
			}
			> .title {
				margin: 10px 0;
				line-height: 40px;
				padding-left: 15px;
				font-weight: 600;
				font-size: 30px;
				border-left: 10px solid #f77b83;
			}
			ul {
				background-color: #f8f8f8;
				li {
					line-height: 40px;
					padding-left: 2em;
					font-size: 18px;
					font-family: STSong;
				}
				.play_ps::after {
					content: "ps：(拦不住，根本拦不住，就这点爱好)";
					font-size: 12px;
					margin-left: 15px;
				}
			}
		}
		.img_div {
			margin: 30px auto;
			width: 70%;

			img {
				width: 100%;
			}
		}
		.introduce_ps::after {
			content: "ps：(唯一需要，花费您的一小段时间来介绍咱们的项目，我会认真思考项目的前景，中国人不骗中国人。)";
			color: #ff0000;
			font-size: 12px;
			margin-left: 15px;
		}
		// .contact_ps::after {
		// 	content: "ps：(价格能抵消掉我的租房费用就可以了。)";
		// 	color: #ff0000;
		// 	font-size: 12px;
		// 	margin-left: 15px;
		// }
	}
	.dialog_footer {
		text-align: right;
		button {
			margin-left: 15px;
			padding: 10px 20px;
			margin-right: 0;
			transition: all 0.05s linear;
		}
		.no_btn:hover {
			opacity: 0;
		}
	}
</style>