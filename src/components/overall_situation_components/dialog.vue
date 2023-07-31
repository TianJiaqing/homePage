<template>
	<div class="dialog t0_l0 d_f j_c a_i">
		<div class="d_f j_b">
			<!-- 头 -->
			<div class="dialog_header">
				<p>抱歉啊</p>
			</div>
			<!-- 身 -->

			<slot name="content">
				<div class="dialog_content">
					<p>不想写这个功能的代码了，请手动滑动到屏幕最上方！</p>
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
</template>
<script setup>
</script>

<style scoped lang="less">
	.dialog {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.1);

		> div {
			width: 50vw;
			font-weight: 300;
			height: 200px;
			box-shadow: 0px -2px 50px 0px rgba(0, 0, 0, 0.1);
			background-color: white;
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
				padding: 10px 20px;
				margin-right: 0;
				transition: all 0.2s linear;
			}
			.no_btn:hover {
				opacity: 0;
			}
		}
	}
</style>
