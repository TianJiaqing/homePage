
class _ {
    constructor(callback = () => { }, throttle_interval = 500) {
        this.callback = callback
        this.throttle_time = new Date();
        this.throttle_interval = throttle_interval
        this.process = null
    }
    throttle(...arg) {
        let time = new Date()
        if (time - this.throttle_time > this.throttle_interval) {
            this.throttle_time = time
            this.callback.apply(this, arg)
        }
    }
    debounce(...arg) {
        if (this.process) {
            clearTimeout(this.process)
        }
        this.process = setTimeout(() => {
            this.callback.apply(this, arg)
        }, this.throttle_interval);
    }
}
export default _