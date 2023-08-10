import useAxios from "@utils/axios/index";
const { axiosGet } = useAxios();
const audio_list = []
class _audio {
    constructor(el) {
        this.el = el
        if (audio_list.length) {
            console.log(audio_list);
            audio_list.forEach(item => item.audio_stop())
        }
        this.text = [{
            time: 0,
            text: "歌词准备中···"
        }]
        this.start = 0
        Promise.all([this.get_url(), this.get_text()]).then(() => {
            // this.audio_play()
            audio_list.push(this)
        })
    }
    get_text() {
        return new Promise((succ, fail) => {
            axiosGet("/music_text.json", { time: new Date().getTime() }, (res) => {
                const list = res.lrc.lyric.split('\n')
                let arr = list.map(item => {
                    let time = item.substring(1, 10).split(':')
                    time = time[0] * 60 + parseFloat(time[1])
                    return {
                        time,
                        text: item.substring(11)
                    }
                })
                setTimeout(() => {
                    this.text = arr
                    succ()
                }, 1000);
            });
        })

    }
    get_url() {
        return new Promise((succ, fail) => {
            const url =
                "http://m801.music.126.net/20230809175427/30b1138e0b358e7a7c825ddedb985d70/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096574807/b79d/965c/96b1/ee690087dfcd2913a5dfac14e6ffcc5c.m4a";
            this.url = url
            this.audio = new Audio(url)
            succ()
        })
    }
    get_lyric() {
        const time = this.audio.currentTime
        try {
            if (this.text[this.start].time <= time) {
                this.lyric = this.text[this.start].text
                this.start += 1
            }
        } catch (error) {
            console.log(error);
            console.warn('audio.text is loading');
            this.start = 0
        }
        this.el.innerText = this.lyric || '···'
        return this.lyric
    }
    get_info() {
        return new Promise((succ, fail) => {
            axiosGet("/music_info.json", { time: new Date().getTime() }, (res) => {
                succ(res)
            });
        })
    }
    audio_play() {
        this.audio.play()
        const that = this
        this.audio.addEventListener("timeupdate", () => {
            that.get_lyric()
        })
    }
    //设置歌词展现元素
    set_el(el) {
        this.el = el
    }
    audio_stop() {
        this.audio.pause()
        // this.audio.removeEventListener('timeupdate')
    }

}
//播放队列
const get_list = () => audio_list
export default function (el) {
    return new _audio(el)
}
export {
    get_list
}