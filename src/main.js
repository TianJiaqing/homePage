import { createApp } from 'vue'
import './style/style.css'
import './style/iconfont.css'
import './style/common.css'
import './font_family/font_family.css'

import App from './App.vue'
import { router } from './router/index'

import { v_directive } from '@utils/vue_utils/vue_instruct'
import vue_component from '@utils/vue_utils/vue_component'
let isPc = true;
const width = document.scrollingElement.scrollWidth;
if (width < 500) {
    isPc = false;
}
//ES6的at方法，被这个坑了好几次了，不知道什么原因浏览器都没有这个方法！！
if (!Array.prototype.at) {
    Array.prototype.at = function (index = 0) {
        if (index >= 0) { return this[index] }
        else {
            return this[this.length + index]
        };
    }
}
if (!Math.toPercent) {
    Math.toPercent = (index = 0) => {
        if (typeof (index) == 'number') {
            return index * 100 + '%'
        } else {
            console.error("抱歉，这不是一个Number类型的参数")
        }
    }
}
const app = createApp(App)
app.use(vue_component).use(v_directive).use(router).mount('#app')
