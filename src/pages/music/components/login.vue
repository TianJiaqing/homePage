
<template>
	<div class="music d_f a_i j_c">
		<div class="contain scroll_full d_f p_r">
			<div class="_form d_f" ref="_form">
				<div>
					<label for="name">用户名</label>
					<input type="text" id="name" />
				</div>
				<div><label for="pwd">密码</label><input type="text" id="pwd" /></div>
			</div>
			<div class="form_div t0_l0" ref="form" @click="changeForm"></div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	const form = ref(null);
	const _form = ref(null);

	let type = ref(true);
	const changeForm = () => {
		if (type.value) {
			form.value.classList.add("form_div_right");
			_form.value.classList.add("_form_right");
		} else {
			form.value.classList.remove("form_div_right");
			_form.value.classList.remove("_form_right");
		}
		// _form_right
		type.value = !type.value;
	};
</script>

<style scoped lang="less">
	.music {
		width: 100vw;
		height: 100vh;
		.contain {
			width: 90%;
			height: 90%;
			overflow-y: auto;
			box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);
			background-color: rgba(0, 0, 0, 0.1);
			background-size: 100% auto;
			> div {
				border: 1px solid;
				width: 50%;
				transition: all 0.5s linear;
			}
			.form_div {
				position: absolute;
				background-color: #6666;
				height: 100%;
			}
			.form_div_right {
				left: 50%;
			}
			._form {
				position: relative;
				left: 50%;
				justify-content: center;
				flex-direction: column;
				> div {
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 30px 0;
					label {
						width: 60px;
						display: inline-block;
					}
				}
			}
			._form_right {
				left: 0%;
			}
		}
		input {
			border: none;
			outline: none;
			width: 250px;
			height: 40px;
			border-radius: 0;
			background-color: transparent;
			border-bottom: 1px solid #999;
		}
	}
</style>
