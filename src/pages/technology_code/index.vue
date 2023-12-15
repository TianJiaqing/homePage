
<template>
	<div class="technology_code">
		<div>
			<!-- 头部背景图片展示 -->
			<pageHeader></pageHeader>
			<!-- 个人信息卡片展示 -->
			<infoCard></infoCard>
			<!-- <transition-group name="card" tag="ul" appear> -->
			<!-- 朋友圈信息展示 -->
			<div
				v-for="(item, index) in list"
				:key="index"
				:ref="set_ref"
				class="msgCard"
			>
				<!-- 如果直接遍历msgCard组件，ref的绑定似乎有些问题 -->
				<msgCard
					:detail="item"
					:style="{ '--index': index }"
					:msg_type="item.msg_type"
					@view_details="view_details"
				></msgCard>
			</div>
			<!-- </transition-group> -->
			<!-- 朋友圈信息详情 -->
			<transition name="fade">
				<infoDetail
					v-if="show_detail"
					:id="current_id"
					:detail="current_item"
					@close_details="close_details"
				></infoDetail>
			</transition>
		</div>
	</div>
</template>
<script setup>
	import infoCard from "./components/info_card.vue";
	import msgCard from "./components/msg_card.vue";
	import pageHeader from "./components/page_header.vue";
	import infoDetail from "./components/detail.vue";
	import { ref, onMounted } from "vue";
	let list = [
		{
			id: 1,
			img_url: "@/assets/images/2.jpg",
			msg_type: 1,
			detail: "xxxx内容666，我真是xxxx内容666",
			data: "2023-01-02",
		},
		{
			id: 2,
			img_url: "@/assets/images/2.jpg",
			msg_type: 2,
			detail:
				"xxxx内容666ddetail，我真是xxxx内容666，我真是，xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是",
			data: "2023-01-02",
		},
		{
			img_url: "@/assets/images/2.jpg",
			msg_type: 1,
			detail:
				"xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是",
			data: "2023-01-04",
		},
		{
			img_url: "@/assets/images/2.jpg",
			msg_type: 1,
			detail:
				"xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是",
			data: "2023-01-04",
		},
		{
			img_url: "@/assets/images/2.jpg",
			msg_type: 2,
			detail:
				"xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是",
			data: "2023-01-04",
		},
		{
			img_url: "@/assets/images/2.jpg",
			msg_type: 1,
			detail:
				"xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是",
			data: "2023-01-06",
		},
		{
			img_url: "@/assets/images/2.jpg",
			msg_type: 2,
			detail:
				"xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是",
			data: "2023-01-07",
		},
	];
	list = [...list, ...list, ...list];
	//如果上条数据与下条数据日期相同，下跳日期置空
	list.reduce((pre, next) => {
		if (pre == next.data) {
			next.data = null;
			return pre;
		}
		return next.data;
	}, "");

	//控制出现弹窗
	const show_detail = ref(false);
	//当前选中的文章id
	const current_id = ref("");
	//文章详情
	const view_details = (id) => {
		if (id) {
			show_detail.value = true;
			current_id.value = id;
		}
	};
	//关闭文章详情弹窗
	const close_details = (val) => {
		show_detail.value = false;
		current_id.value = null;
	};

	//vue3：设置v-for绑定对应ref
	let animate_card = [];
	const set_ref = (el) => {
		if (el) {
			animate_card.push(el);
		}
	};

	//朋友圈信息出现动画
	const set_animate = () => {
		const tags = animate_card;
		const doc = new IntersectionObserver((e) => {
			//动画默认延迟时间
			let time = 0;
			//上下动画的间隔时间
			const interval = 0.2;
			e.forEach((item) => {
				const { target, isIntersecting } = item;
				if (isIntersecting) {
					doc.unobserve(target);
					target.classList.add("show");
					target.style = `--time:${time}`;
					time += interval;
				}
			});
		});
		tags.forEach((item) => {
			doc.observe(item);
		});
	};

	onMounted(() => {
		set_animate();
	});
</script>

<style scoped lang="less">
	.technology_code {
		> div {
			max-width: 600px;
			background-color: #fff;
			margin: 0 auto;
			padding-bottom: 20px;
		}
		background-color: #f1f1f1;
	}

	/* 可能为enter失效，拆分为 enter-from和enter-to */
	.card-enter-from {
		transform: translateX(100%);
		opacity: 0;
	}
	.card-enter-to {
		opacity: 1;
		transform: translateX(0%);
	}

	.card-leave-to {
		opacity: 0;
		transform: translateY(100%);
	}

	.msgCard {
		transition-delay: calc(var(--index) * 0.1s);
		margin: 2em 0;
		transform: translateX(-100%);
		opacity: 0.1;
	}

	.show {
		// transition: transform 0.5s linear;
		transition: all 0.6s ease-in-out;
		transition-delay: calc(var(--time) * 1s);
		transform: translateX(0%);
		opacity: 1;
	}
</style>
