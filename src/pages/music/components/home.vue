
<template>
	<div class="music d_f a_i j_c">
		<div class="contain d_f p_r">
			<div class="music_list scroll_full">
				<button @click="changeForm">start</button>
				<button @click="get_info">info</button>
				<div v-for="item in 20" :key="item">
					<span class="title"> 排序{{ item }} </span>
					<span class="name">小序{{ item }}</span>
				</div>
			</div>
			<div class="music_text scroll_full d_f a_i">
				<!-- <div>
					<p>{{ info.music_name }}</p>
					<p>{{ info.name }}</p>
				</div>
				<div class="img_div">
					<img :src="info.pic_url" alt="" />
				</div>
				<div class="lyric f_f1">
					<p ref="lyric">大意</p>
				</div> -->
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
	import windows_info from "_hook/windows_info";
	import useAxios from "@utils/axios/index";
	import audio from "@utils/music_text/music";
	const { axiosGet } = useAxios();
	const { client_height, client_width, BrowserInfo } = windows_info();
	//p文本标签高度
	const p_height = 30;
	const lyric = ref(null);
	onMounted(() => {});
	let type = ref(true);
	const splice_arr = (start = 0, end, arr = []) => {
		return arr.splice(start, end);
	};

	let music = null;
	const changeForm = () => {
		music = audio(lyric.value);
		music.audio_play();
	};
	const info = ref({
		pic_url:
			"https://p1.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg",
		music_name: "啦啦啦",
		name: "beu",
	});
	const get_info = () => {
		music.get_info().then((res) => {
			console.log("info____", res);
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
			opacity: 1;
			z-index: -1;
			background: url("https://img-baofun.zhhainiao.com/market/semvideo/4a92e3e76c456a8a09f8563f000be2c9_preview.jpg")
				no-repeat;
			background-position: 0% center;
		}
		.contain {
			width: 90%;
			height: 90%;
			overflow-y: auto;
			box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);
			background-size: 100% auto;
			> div {
				width: 50%;
			}
			.music_text {
				cursor: pointer;
				overflow-y: auto;
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
					width: 75%;
				}
			}
			.music_list {
				overflow-y: auto;
				> div {
					height: 60px;
					padding-left: 2em;
					.name {
						font-size: 14px;
						color: rgb(155, 152, 152);
						font-weight: 300;
						font-family: "华文行楷";
						line-height: 60px;
						margin-left: 10px;
					}
					.title {
						font-size: 20px;
						font-family: "华文中宋";
						line-height: 60px;
					}
				}
			}
			.img_div {
				width: 300px;
				margin: 0 auto;
				border-radius: 50%;
				height: 300px;
				box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.1);
				overflow: hidden;
				img {
					width: 100%;
				}
			}
		}
	}
</style>
