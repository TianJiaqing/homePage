// 注册vue自定义指令工具

/**
 * el 绑定元素dom
 * val 绑定的值
 * vnode 
 */
let _ = {

}
//设置waiting元素的样式，根据目标taregt样式进行设置
const set_waiting_style = (waiting_dom, target = {}) => {
    const bound = target.getBoundingClientRect()
    const { height, left, width, top } = bound
    waiting_dom.setAttribute('style', `
    width:${width}px;
    height: ${height}px;
    left:${left}px;
    top:${top}px;
    visibility:visible;
    `)
}
//清除waiting元素的样式，让其继续保持隐藏
const clear_waiting_style = (waiting_dom) => {
    waiting_dom.setAttribute('style', `
    visibility:hidden;
    `)
}
// 自定义等待loading   v-waiting指令
const waiting = (Vue) => {
    Vue.directive('waiting', (el, val, vnode) => {
        if (val.value) {
            if (!_.waiting_dom) {
                const waiting_dom = document.querySelector(".waiting_div")
                _.waiting_dom = waiting_dom
            }
            set_waiting_style(_.waiting_dom, el)
        } else {
            clear_waiting_style(_.waiting_dom)
            return
        }
    })
}

const v_directive = (Vue) => {
    waiting(Vue)
}

export {
    v_directive
}