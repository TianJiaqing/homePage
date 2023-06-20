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
    Array.prototype.at = function (index) {
        if (index >= 0) { return this[index] }
        else {
            return this[this.length + index]
        };
    }
}
const app = createApp(App)
app.use(router).use(v_directive).use(vue_component).mount('#app')
