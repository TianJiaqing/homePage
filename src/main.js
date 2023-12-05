import {
    createApp
} from "vue";
//全局样式
import "./style/style.css";
//全局iconfont
import "./style/iconfont.css";
//全局css，短类名
import "./style/common.css";
//全局字体类型
import "./font_family/font_family.css";
import App from "./App.vue";
//路由信息
import {
    router
} from "./router/index";

//全局自定义指令
import {
    v_directive
} from "@utils/vue_utils/vue_instruct";

//全局组件
import vue_component from "@utils/vue_utils/vue_component";

let isPc = true;
const width = document.scrollingElement.scrollWidth;
if (width < 500) {
    isPc = false;
}
//重写Array的at方法
//ES6的at方法，被这个坑了好几次了，不知道什么原因浏览器都没有这个方法！！
if (!Array.prototype.at) {
    Array.prototype.at = function (index = 0) {
        if (index >= 0) {
            return this[index];
        } else {
            return this[this.length + index];
        }
    };
}
//toPercent数字转为百分数
if (!Math.toPercent) {
    Math.toPercent = (index = 0) => {
        if (typeof index == "number") {
            return index * 100 + "%";
        } else {
            console.error("抱歉，这不是一个Number类型的参数");
        }
    };
}
const app = createApp(App);
app.use(vue_component).use(v_directive).use(router).mount("#app");