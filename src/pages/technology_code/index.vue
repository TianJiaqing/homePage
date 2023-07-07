
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
			></msgCard>
		</div>
	</div>
</template>
<script setup>
	import infoCard from "./components/info_card.vue";
	import msgCard from "./components/msg_card.vue";
	import pageHeader from "./components/page_header.vue";
	let list = [
		{
			img_url: "@/assets/images/2.jpg",
			msg_type: 1,
			detail: "xxxx内容666，我真是xxxx内容666",
			data: "2023-01-02",
		},
		{
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
</style>
