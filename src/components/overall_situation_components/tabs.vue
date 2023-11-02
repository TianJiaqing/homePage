
<template>
	<div class="tabs_div">
		<ul>
			<li
				v-for="(item, index) in list"
				:key="index"
				:class="{ tabs_focus: current_value == index }"
				@click="change(item, index)"
			>
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
	let props = defineProps({
		list: {
			type: Array,
			default: () => [],
		},
	});
	let emit = defineEmits(["change"]);
	let list = ref([]);
	let current_value = ref(0);
	onMounted(() => {
		list.value = props.list;
	});

	const change = (data, index) => {
		current_value.value = index;
		emit("change", data, index);
	};
</script>

<style scoped lang="less" >
	.tabs_div {
		ul {
			display: flex;
			cursor: pointer;
			text-align: center;
            color: #000;
			li {
				padding: 5px;
				// border: 1px solid;
				margin: 0 5px;
			}
			.tabs_focus {
				border-bottom: 2px double #409EFF;
				position: relative;
                text-decoration: line-through;
                color: #409EFF;
			}
		}
	}
</style>
