
<template>
	<div class="music d_f a_i j_c">
		<div class="contain d_f p_r" ref="contain">
			<div class="music_div">
				<div class="banner">
					<div class="img_div d_f j_c a_i">
						<img src="@/assets/images/3.webp" alt="" />
					</div>
				</div>
				<div class="music_list scroll_full">
					<!-- <button @click="changeForm">start</button>
				<button @click="get_info">info</button> -->
					<div>
						<span class="title text_overflow">海阔天空 </span>
						<span class="hear" @click="play">播</span>
						<!-- 播放按钮，可以先判断当前播放的是否是选中的，如果是(暂停、播放)，如果不是(新建对象) -->
						<span class="name">--Beyond(超越)</span>
						<span class="time">时长：5分22秒</span>
					</div>
					<div v-for="item in 20" :key="item">
						<span class="title text_overflow">排序排序{{ item }} </span>
						<span class="hear">播</span>
						<span class="name">--李白</span>
						<span class="time">时长：1分28秒</span>
					</div>
				</div>
			</div>
			<div class="music_text scroll_full d_f a_i">
				<div>
					<p>{{ info.music_name }}</p>
					<p>{{ info.name }}</p>
				</div>
				<div class="img_div">
					<img :src="info.pic_url" alt="" />
				</div>
				<div class="lyric f_f1">
					<p ref="lyric">暂无</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
	import windows_info from "_hook/windows_info";
	import useAxios from "@utils/axios/index";
	import audio, { get_list } from "@utils/music_text/music";
	import img from "@/assets/images/2.webp";
	const { axiosGet } = useAxios();
	const { client_height, client_width, BrowserInfo } = windows_info();
	//p文本标签高度
	const p_height = 30;
	const lyric = ref(null);
	const contain = ref(null);
	onMounted(() => {
		const list = get_list();
		if (list.length) {
			const audio = list.at(-1);
			audio.set_el(lyric.value);
			audio.audio_play();
			get_info(audio);
		} else {
			changeForm();
		}
	});
	let type = ref(true);
	const splice_arr = (start = 0, end, arr = []) => {
		return arr.splice(start, end);
	};

	let music = null;
	const changeForm = () => {
		music = audio(lyric.value);
		get_info(music);
	};
	const play = () => {
		music.audio_play();
	};
	const info = ref({
		pic_url:
			"https://p1.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg",
		music_name: "啦啦啦",
		name: "beu",
	});
	const get_info = (music) => {
		music.get_info().then((res) => {
			const data = res.songs[0];
			const al = data.al;
			const ar = data.ar;
			info.value = {
				music_name: al.name,
				name: ar.map((item) => item.name).join(","),
				pic_url: al.picUrl,
			};
		});
	};
</script>

<style scoped lang="less">
	.music {
		width: 100vw;
		height: 100vh;

		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			opacity: 0.9;
			z-index: -1;
			background-color: #2c4b70;
			// https://img1.baidu.com/it/u=2887197776,269924051&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691773200&t=2ea17ba462cbb14d29900c2f3bd46fbc
			// https://img2.baidu.com/it/u=446558595,803567934&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto
			background: url("@/assets/images/3.webp") no-repeat;
			background-position: 0% center;
			background-size: 100% auto;
		}
		&::before {
			content: "";
			display: block;
			width: 90%;
			height: 90%;
			position: absolute;
			left: 5%;
			top: 5%;
			opacity: 0.1;
			background-color: #000;
		}
		.contain {
			width: 90%;
			height: 90%;
			overflow-y: auto;
			box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.6);
			// background-size: 100% auto;
			position: relative;
			// opacity: 0.5;
			z-index: 99;

			> div {
				width: 50%;
			}
			.music_div {
				padding: 15px;
				.banner {
					height: 50%;
				}
			}
			.music_text {
				cursor: pointer;
				overflow-y: auto;
				opacity: 0.75;
				flex-direction: column;
				justify-content: space-evenly;
				p {
					text-align: center;
					line-height: 30px;
					font-family: serif;
				}
				.lyric {
					font-size: 25px;
					height: 80px;
					color: white;
					width: 75%;
				}
				.img_div {
					border-radius: 50%;
					height: 300px;
					width: 300px;
				}
			}
			.music_list {
				overflow-y: auto;
				height: 50%;
				> div {
					height: 60px;
					padding-left: 2em;
					line-height: 60px;
					display: flex;
					color: #fff;
					justify-content: space-around;
					.name {
						font-size: 14px;
						color: #000;
						color: #fff;
						font-weight: 300;
						font-family: "华文行楷";
						line-height: 60px;
						margin-left: 10px;
					}
					.title {
						font-size: 20px;
						color: #fff;
						display: inline-block;
						width: 30%;
						font-family: "华文中宋";
					}
					.time {
						font-size: 12px;
						font-family: "华文中宋";
					}
					.hear {
						font-size: 12px;
						line-height: 20px;
						margin: 20px 0;
						display: inline-block;
						box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.6);
						text-align: center;
						width: 20px;
						height: 20px;
						cursor: pointer;
						border-radius: 50%;
						transition: all 0.2s ease-in-out;
						&:hover {
							box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
						}
					}
				}
			}
			.img_div {
				width: 99%;
				height: 95%;
				margin: 0 auto;
				border-radius: 5px;
				box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.1);
				overflow: hidden;
				img {
					width: 100%;
				}
			}
		}
	}
</style>
