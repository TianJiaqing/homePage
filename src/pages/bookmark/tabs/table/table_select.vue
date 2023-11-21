
<template>
	<div class="table_div">
		<ul>
			<li><span>姓名：</span><input type="text" v-model="form.name" /></li>
			<li><span>职位：</span><input type="text" v-model="form.work" /></li>
			<li><span>薪资：</span><input type="text" v-model="form.money" /></li>
			<li>
				<button @click="select">查询</button>
			</li>
			<li>
				<button @click="reset">重置</button>
			</li>
			<li>
				<button @click="excell">导出</button>
			</li>
			<!-- <li>
				<button @click="print">打印</button>
			</li> -->
		</ul>
		<table ref="table">
			<!-- <th></th> -->
			<tr>
				<th>序号</th>
				<th>姓名</th>
				<th>性别</th>
				<th>年龄</th>
				<th>薪资</th>
				<th>职位</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item, index) in list" :key="index">
				<td class="number">{{ index + 1 }}</td>
				<td>{{ item.name }}</td>
				<td>{{ { 1: "男", 2: "女", 3: "未知" }[item.sex] }}</td>
				<td>{{ item.age }}</td>
				<td>
					<span>{{ show_money(item.money) }}</span>
				</td>
				<td>{{ item.work }}</td>
				<td>
					<span class="iconfont icon-edit" @click="edit(item)"></span>
					<span class="iconfont icon-ziyuan" @click="delete_data"></span>
				</td>
			</tr>
		</table>
	</div>
	<div class="d_f j_c a_i table_bottom">
		<table_bottom @change="change" flg="true" />
	</div>
	<T-dialog :title="title" :flg="flg">
		<template #footer>
			<div class="dialog_footer">
				<button class="no_btn">不行</button>
				<button @click="closeDialog(2)">准奏</button>
			</div>
		</template>
	</T-dialog>

	<table_edit :flg="edit_flg" @closeDialog="close_edit" :data="current_edit" />
	<T-dialog :flg="delete_flg" @closeDialog="close_delete">
		<template #header>
			<span style="font-size: 12px">谁懂啊，家人们，它要删了我</span>
		</template>
		<template #content>
			<div class="delete_content">
				<p>是否删除这个数据？</p>
				<p>Are you ok?</p>
			</div>
		</template>
	</T-dialog>
</template>
<script setup>
	import { ref } from "vue";
	import table_bottom from "./table_bottom.vue";
	import table_edit from "./table_edit.vue";
	import { data } from "./data";
	const form = ref({
		money: 0,
		name: "",
		work: "",
	});
	//数据
	let list = ref(data);

	// 转换数字
	const show_money = (num) => {
		if (num) {
			let str = num + "";
			let res = "";
			let len = 2;
			str
				.split("")
				.reverse()
				.forEach((item, index) => {
					if (index == len) {
						if (index != str.length - 1) {
							res += item + ",";
							len += 3;
						} else {
							res += item;
						}
					} else {
						res += item;
					}
				});
			return res.split("").reverse().join("");
		} else {
			return "未知";
		}
	};

	//查询
	const select = () => {
		let arr = [].concat(data);
		Object.keys(form.value).forEach((item) => {
			if (form.value[item]) {
				const key = item;
				const val = form.value[item];
				arr = arr.filter((item) => {
					return item[key].includes(val);
				});
			}
		});
		list.value = arr;
	};

	//重置
	const reset = () => {
		form.value = { name: "", money: "", work: "" };
		select();
	};
	//
	const change = (val) => {
		console.log(val);
	};

	//弹窗
	const flg = ref(false);
	const title = ref("");

	const table = ref(null);
	const print = () => {
		// title.value;

		//（1）首先获得元素的html内容（这里建议如果有样式最好是用内联样式的方式）
		var newstr = table.value.innerHTML; //得到需要打印的元素HTML

		//（2）保存当前页面的整个html，因为window.print()打印操作是打印当前页的所有内容，所以先将当前页面保存起来，之后便于恢复。
		var oldstr = document.body.innerHTML; //保存当前页面的HTML

		//（3）把当前页面替换为打印内容HTML
		document.body.innerHTML = newstr;

		//（4）执行打印操作
		window.print();

		//（5）还原当前页面
		document.body.innerHTML = oldstr;
	};
	const excell = () => {
		flg.value = true;
		title.value =
			"这个太复杂了，暂时没时间手撕，前端导出一般是xlsx(前端限制较多，建议后端导出)。";
	};

	const closeDialog = (val) => {
		if (val == 2) {
			flg.value = false;
		}
	};

	//表格编辑操作
	const edit_flg = ref(false);

	const current_edit = ref({});

	const edit = (val) => {
		edit_flg.value = true;
		current_edit.value = val;
	};

	const close_edit = (val) => {
		edit_flg.value = false;
	};

	//表格删除操作
	const delete_flg = ref(false);
	const delete_data = () => {
		delete_flg.value = true;
	};

	const close_delete = () => {
		delete_flg.value = false;
	};
</script>

<style scoped lang="less">
	.table_div {
		margin-top: 15px;
		table {
			border-collapse: collapse;
			width: 100%;
			text-align: center;
			color: #333;
			font-size: 12px;
			cursor: pointer;
			tr {
				&:nth-child(odd) {
					background-color: rgba(0, 0, 0, 0.05);
				}
				&:hover td {
					background-color: rgba(0, 0, 0, 0.1);
				}
			}
			th {
				font-family: YZCCQSXK;
				padding: 6px 0;
				font-size: 17px;
				font-weight: 400;
				border: 1px solid rgba(0, 0, 0, 0.05);
			}
			td {
				padding: 10px 15px;
				border: 1px solid rgba(0, 0, 0, 0.05);
			}
			td:last-child {
				width: 150px;
			}
			.number {
				width: 40px;
			}
			.iconfont {
				width: 20px;
				height: 20px;
				display: inline-block;
				text-align: center;
				margin: 0 6px;
				padding: 5px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				background-color: transparent;
				transition: all 0.2s ease-in-out;
			}
			.icon-ziyuan {
				color: #f00;
				&:hover {
					background-color: rgba(255, 0, 0, 0.2);
				}
			}
			.icon-edit {
				color: rgb(64, 158, 255);
				&:hover {
					background-color: rgba(64, 158, 255, 0.2);
				}
			}
		}
		ul {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			li {
				input {
					outline: none;
					border: none;
					border-bottom: 1px solid #000;
					border-radius: 0;
				}

				margin: 10px 0;
				margin-right: 15px;
				select {
					outline: none;
					width: 150px;
					height: 30px;
					/*当选择某一项时，修改对应的样式*/
					option:checked {
						background-color: #ddd;
						color: #999;
					}
				}
				option {
					padding: 15px 5px;
					display: inline-block;
				}
				button {
					padding: 2px 15px;
					font-size: 12px;
					border: 1px solid #666;
					color: #666;
					&:hover {
						background-color: #409eff;
						color: #fff;
						border: 1px solid #409eff;
						transition: all 0.2s ease-in-out;
					}
				}
			}
		}
	}
	.table_bottom {
		padding: 20px 0;
	}
	.dialog_footer {
		text-align: right;
		button {
			margin-left: 15px;
			padding: 10px 20px;
			margin-right: 0;
			transition: all 0.05s linear;
		}
		.no_btn:hover {
			opacity: 0;
		}
	}
	.delete_content {
		p {
			line-height: 25px;
			text-align: center;
		}
	}
</style>
