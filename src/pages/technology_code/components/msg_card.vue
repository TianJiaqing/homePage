<template>
	<!-- 文章信息卡片 -->
	<div class="msg_card d_f j_b">
		<div class="data_div">
			<template v-if="show_time">
				<span class="day_span">{{ day }}</span>
				<i class="month_span">{{ month }}</i>
			</template>
		</div>
		<div class="main_contain" @click="$emit('view_details',detail.id)">
			<div class="text_contain" v-if="props.msg_type == 1">
				<p>
					{{ detail.detail }}
				</p>
			</div>
			<div class="img_contain d_f j_b" v-else-if="props.msg_type == 2">
				<div class="div_img_contain">
					<img src="@/assets/images/2.jpg" alt="" />
				</div>
				<div class="text_div d_f j_b">
					<p class="text_p">
						{{ props.detail.detail }}
					</p>
					<p class="img_length_p">共{{detail.img_url.length}}张</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue";
import img_url from '@/assets/images/2.jpg';
	const props = defineProps({
		msg_type: {
			type: [Number, String],
			default: 1,
		},
		img_list: {
			type: Array,
			default: [],
		},
		detail: {
			type: Object,
			default: () => ({}),
		},
	});
	const { detail } = props;
	const day = ref(null);
	const month = ref(null);
	const show_time = ref(detail.data);
	if (detail.data) {
		day.value = detail.data.slice(8);
		month.value = detail.data.slice(5, 7) + "月";
	}
</script>

<style scoped lang="less">
	.msg_card {
		// margin: 40px 0;
		padding: 0 10px;
		// margin-top: 0;
		margin-bottom: 0;
		.data_div {
			white-space: nowrap;
			width: 60px;
			flex-shrink: 0;
		}
		.day_span {
			font-weight: 500;
			font-size: 24px;
		}
		.month_span {
			font-size: 12px;
		}
		.main_contain {
			flex-grow: 1;
			margin-left: 15px;
			color: #666;
			font-size: 14px;
			.text_contain {
				cursor: pointer;
				max-height: 88px;
				background-color: #f7f7f7;
				overflow: hidden;
				padding: 10px 5px;
				border: 1px solid transparent;
				p {
					line-height: 24px;
				}
			}
		}
		.img_contain {
			cursor: pointer;

			.div_img_contain {
				overflow: hidden;
				height: 100px;
				width: 100px;
				flex-shrink: 0;
				margin-right: 15px;
				> img {
					width: 100px;
				}
			}
			.text_div {
				overflow: hidden;
				flex-direction: column;
				.img_length_p {
					font-size: 12px;
					zoom: 0.9;
					color: #b2b2b2;
				}
				.text_p {
					height: 72px;
					line-height: 24px;
					overflow: hidden;
				}
			}
		}
	}
</style>
