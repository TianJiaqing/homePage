
<template>
	<div class="technology_code">
		<div>
			<pageHeader></pageHeader>
			<infoCard></infoCard>
			<msgCard
				v-for="(item, index) in list"
				:key="index"
				:detail="item"
				:msg_type="item.msg_type"
				@view_details="view_details"
			></msgCard>
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
	import { ref } from "vue";
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
			msg_type: 1,
			detail:
				"xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是，xxxx内容666，我真是",
			data: "2023-01-07",
		},
	];
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
	const view_details = (id) => {
		if (id) {
			show_detail.value = true;
			current_id.value = id;
		}
	};
	const close_details = (val) => {
		show_detail.value = false;
		current_id.value = null;
	};
</script>

<style scoped lang="less">
	.technology_code {
		> div {
			max-width: 600px;
			background-color: #fff;
			margin: 0 auto;
		}
		background-color: #f1f1f1;
	}
	/* 路由切换动画 */
	/* fade-transform */
	.fade-leave-active,
	.fade-enter-active {
		transition: all 0.5s;
	}

	/* 可能为enter失效，拆分为 enter-from和enter-to */
	.fade-enter-from {
		opacity: 0;
		transform: translateY(-30px);
	}
	.fade-enter-to {
		opacity: 1;
		transform: translateY(0px);
	}

	.fade-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
</style>
