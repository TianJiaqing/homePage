
<template>
	<T-dialog>
		<template #header>
			<p>编辑</p>
		</template>
		<template #content>
			<div class="content">
				<p v-for="(item, index) in data" :key="index">
					<span>{{ index }}：</span><span>{{ item || "暂无具体信息" }}</span>
				</p>
			</div>
		</template>
	</T-dialog>
</template>
<script setup>
	const props = defineProps({
		data: {
			type: Object,
			default: () => ({}),
		},
	});
</script>

<style scoped lang='less'>
	p {
		line-height: 30px;
		> span {
			&:first-child {
				width: 7em;
				display: inline-block;
				text-align: right;
			}
		}
	}
	.content {
		flex-grow: 0;
		flex-shrink: 0;
	}
</style>
