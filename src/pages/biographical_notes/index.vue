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
				<li>天上掉馅饼，我找工作的时候都很幸运，几乎无波澜。</li>
				<li>很悲哀的是，尚未吃到互联网红利，就听到了互联网已死的消息。</li>
				<li>很悲哀的是，我喜欢做每一件事情，但几乎都是半途而废。</li>
				<li>
					很悲哀的是，近段时间技术上感觉不到增长了(太懒了)，因此手写这个bolg系统的所有内容，鞭挞一下自己。
				</li>
				<li>
					很悲哀的是，南京这边房价均价在3w一平，按照我的薪资来算，不吃不喝只需要30-40年就能拿下，良心！！
				</li>
				<li>很悲哀的是，我需要吃、喝、住，因此大概需要90年才能拿下。</li>
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
		<div class="img_div">
			<img src="@/assets/images/5.jpg" alt="" />
		</div>
		<div style="height: 200px"></div>
	</div>
</template>
<script setup>
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
	}
</style>