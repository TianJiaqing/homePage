<template>
	<transition name="fade">
		<div class="dialog t0_l0 d_f j_c a_i" v-if="flg">
			<div class="d_f j_b">
				<!-- 头 -->
				<slot name="header">
					<div class="dialog_header" v-if="type">
						<p>{{ type }}</p>
					</div>
				</slot>

				<!-- 身 -->

				<slot name="content">
					<div class="dialog_content">
						<p>{{ title }}</p>
					</div>
				</slot>
				<!-- 尾 -->
				<slot name="footer">
					<div class="dialog_footer">
						<button @click="$emit('closeDialog', 1)">取消</button>
						<button @click="$emit('closeDialog', 2)">确定</button>
					</div>
				</slot>
			</div>
		</div>
	</transition>
</template>
<script setup>
	import { onMounted, ref } from "vue";
	const prop = defineProps({
		//内容
		title: {
			type: String,
			default: "不想写这个功能的代码了，请手动滑动到屏幕最上方！",
		},
		//控制出现和隐藏
		flg: {
			type: Boolean,
			default: false,
		},
		//控制左上方的提示文字
		type: {
			type: String,
			default: "提示",
		},
	});
	onMounted(() => {});
</script>

<style scoped lang="less">
	.dialog {
		--color: rgba(0, 0, 0, 0.1);
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: var(--color);

		> div {
			width: 50vw;
			font-weight: 300;
			min-height: 200px;
			box-shadow: 0px -2px 50px 0px var(--color);
			border-radius: 5px;
			background-color: #fff;
			padding: 15px;
			flex-direction: column;
			align-items: space-between;
			align-content: space-between;
		}

		.dialog_header {
		}

		.dialog_content {
		}

		.dialog_footer {
			text-align: right;

			button {
				margin-left: 15px;
				padding: 5px 20px;
				margin-right: 0;
				transition: all 0.2s linear;
				&:hover {
					background-color: rgba(64, 158, 255, 0.8);
					color: #fff;
				}
			}
			.no_btn:hover {
				opacity: 0;
			}
		}
	}
</style>
