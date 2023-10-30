
<template>
	<div class="table_div">
		<ul>
			<li><span>姓名：</span><input type="text" /></li>
			<li>
				<span>职位：</span
				><select>
					<option value="职位一">职位一</option>
				</select>
			</li>
			<li><span>薪资：</span><input type="text" /></li>
			<li>
				<button>查询</button>
			</li>
			<li>
				<button>重置</button>
			</li>
		</ul>
		<table>
			<!-- <th></th> -->
			<tr>
				<th>序号</th>
				<th>姓名</th>
				<th>薪资</th>
				<th>职位</th>
			</tr>
			<tr v-for="(item, index) in list" :key="index">
				<td class="number">{{ index + 1 }}</td>
				<td>{{ item.name }}</td>
				<td>
					<span>{{ show_money(item.money) }}</span>
				</td>
				<td>{{ item.work }}</td>
			</tr>
		</table>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	const list = [
		{
			name: "田家庆",
			work: "WEB",
			money: 1800,
		},
		{
			name: "刘亦菲",
			work: "女明星",
			money: null,
		},
		{
			name: "吴彦祖",
			work: "是一个形容词",
			money: null,
		},
		{
			name: "彭于晏",
			work: "是一个形容词",
			money: null,
		},
		{
			name: "路人甲",
			work: "java",
			money: 5000,
		},
		{
			name: "路人乙",
			work: "主播",
			money: 48888,
		},
		{
			name: "路人丁",
			work: "无业游民",
			money: 8000,
		},
		{
			name: "炮灰丙",
			work: "自由职业",
			money: 20000,
		},
	];
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
</script>

<style scoped lang="less">
	.table_div {
		margin-top: 15px;
		table {
			border-collapse: collapse;
			width: 100%;
			text-align: center;
			color: #333;
			font-size: 14px;
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
				font-size: 20px;
				border: 1px solid rgba(0, 0, 0, 0.05);
			}
			td {
				padding: 8px 15px;
				border: 1px solid rgba(0, 0, 0, 0.05);
			}
			.number {
				width: 40px;
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
				}
				option {
					padding: 15px 5px;
					display: inline-block;
				}
				button {
					padding: 2px 15px;
					font-size: 12px;
				}
			}
		}
	}
</style>
