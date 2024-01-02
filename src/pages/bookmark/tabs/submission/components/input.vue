<template>
	<div class="contain p_r d_f a_i">
		<template v-if="required">
			<span class="icon">*</span>
			<span class="remind p_a">用户名不能为空</span>
		</template>
		<input
			type="text"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>
<script setup>
	const props = defineProps({
		modelValue: {
			type: String,
		},
		required: {
			type: Boolean,
			default: false,
		},
	});
</script>
<style scoped lang="less">
	.contain {
		input {
			outline: none;
			padding: 0 1em;
			border: none;
			border-radius: 0;
			border-bottom: 1px solid #000;
		}
		.remind {
			font-size: 12px;
			color: #f00;
			left: 2em;
			bottom: -1.5em;
		}
		.icon {
			color: #f00;
			padding-right: 10px;
		}
	}
</style>