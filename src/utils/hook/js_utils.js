/*  demo:
    import _ from "_hook/js_utils";
    const callback = () => {
        console.log("callback");
    };
    const f = new _(callback, 200);
    //对应函数绑定f.throttle或f.debounce即可
*/
class _ {
    constructor(callback = () => { }, time = 500) {
        this.callback = callback
        this.throttle_time = new Date();
        this.time = time
        this.process = null
    }
    //节流辅助函数
    throttle(...arg) {
        let time = new Date()
        if (time - this.throttle_time > this.time) {
            this.throttle_time = time
            this.callback.apply(this, arg)
        }
    }
    //防抖辅助函数
    debounce(...arg) {
        if (this.process) {
            clearTimeout(this.process)
        }
        this.process = setTimeout(() => {
            this.callback.apply(this, arg)
        }, this.time);
    }
}
export default _