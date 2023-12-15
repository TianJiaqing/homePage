<template>
	<div class="container d_f j_c a_i">
		<div class="card_div p_r d_f j_c a_i">
			<div class="card">
				<p class="title">WELCOME</p>
				<div class="input_div">
					<input type="text" placeholder="UserName" v-model="form_data.name" />
				</div>
				<div class="input_div p_r forget">
					<input
						type="password"
						placeholder="Passworld"
						v-model="form_data.pwd"
					/>
				</div>
				<div class="btn_div d_f j_b a_i">
					<div class="register" @click="register">注册</div>
					<div class="join" @click="submit">login</div>
				</div>
			</div>
			<div class="background_div p_a"></div>
		</div>
	</div>
</template>
<script setup>
	import { $confirm } from "@utils/vue_utils/vue_methods";
	import { ref } from "vue";

	const form_data = ref({
		name: "",
		pwd: "",
	});
	const submit = () => {
		const { name, pwd } = form_data.value;
		if (!Boolean(name) || !Boolean(pwd)) {
			$confirm({
				title: "密码或用户名不能为空。",
				type: "__报错！",
			});
			return;
		}
		const form = new FormData();
		form.append("name", name);
		form.append("pwd", pwd);
		let str = "";
		for (let [a, b] of form.entries()) {
			str += a + "：" + (b || "空值") + "\n";
		}
		$confirm({
			title: "~~登录成功！~~ok了，家人们",
			type: "信息",
		});
		return;
	};

	const register = () => {
		$confirm({
			title: "请联系管理员进行注册-_-!",
			type: "信息",
		});
	};
</script>
<style scoped lang='less'>
	.container {
		// background-color: rgba(30, 30, 30, 1);
		height: 100%;
		//整体宽高，宽高保持一致，公用width
		--width: 200px;
		//流水线宽度
		--padding: 8px;
		//高亮色彩
		--base-color: rgba(30, 243, 255, 1);

		.card_div {
			width: calc(var(--width) * 2);
			height: calc(var(--width) * 2);
			border-radius: 10px;
			box-shadow: 0px 3px 5px rgba(0, 21, 41, 0.5);
			overflow: hidden;
			.background_div {
				animation: animate 8s linear infinite;
				border-width: calc(var(--width) * 1.5);
				border-style: solid;
				border-top-color: var(--base-color);
				border-bottom-color: var(--base-color);
				border-left-color: #000;
				border-right-color: #000;
			}
			.card {
				border-radius: 10px;
				width: calc(var(--width) * 2 - var(--padding));
				height: calc(var(--width) * 2 - var(--padding));
				position: relative;
				z-index: 99;
				user-select: none;
				background-color: #000;
				color: #9f9f9f;
				.title {
					// font-weight: 300;
					text-align: center;
					line-height: 100px;
					font-size: 30px;
					color: var(--base-color);
					position: relative;
					&::after {
						content: "^_^";
						font-size: 40px;
						font-family: "YZCCQSXK";
						position: absolute;
						right: 65px;
						line-height: 12px;
						top: 40%;
						display: block;
					}
				}
				input {
					color: #9f9f9f;
					background-color: transparent;
					line-height: 60px;
					height: 50px;
					font-size: 16px;
					width: 80%;
					outline: none;
					border: none;
					border-bottom: 2px solid var(--base-color);
				}
				.input_div {
					text-align: center;
					margin-bottom: 40px;
				}
				.forget::after {
					content: "忘记密码?";
					position: absolute;
					bottom: -1.5em;
					font-size: 12px;
					white-space: nowrap;
					color: var(--base-color);
					right: 3em;
					cursor: pointer;
				}
				.btn_div {
					padding: 0 2em;
					padding-left: 0;
					margin-left: 2em;
					font-size: 20px;
					.join {
						border-bottom: 1px solid var(--base-color);
						padding: 5px 10px;
						font-family: "YZCCQSXK";
						cursor: pointer;
						//下划线
						text-decoration: underline;
						//波浪线
						text-decoration-style: wavy;
						text-decoration-color: var(--base-color);
					}
					.register {
						font-size: 12px;
						cursor: pointer;
						color: var(--base-color);
						line-height: 12px;
						padding: 5px;
						border-bottom: 1px solid var(--base-color);
					}
				}
			}
		}
	}
	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
