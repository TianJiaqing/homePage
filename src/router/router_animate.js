//路由跳转动画
const body = document.body
//背景板块个数
const num = 9
//动画执行时间（s），要与css中的animate动画保持一致
const time = 1
//返回promise对象
const router_animate = () => {
    return new Promise((succ, fail) => {
        const div = document.createElement("div")
        if (!div) {
            fail({ type: 'error', msg: "页面未完全渲染" })
        }
        div.classList.add("vue_router")
        for (let i = 0; i < num; i++) {
            const list = document.createElement("div")
            list.classList.add("vue_router_list")
            list.style.backgroundPositionX = `-${i / num * 100}vw `
            div.appendChild(list)
        }
        body.appendChild(div)
        //留下time * (1000 -800)的时间来渲染下次路由页面
        setTimeout(() => {
            body.removeChild(div)
        }, time * 1000);
        setTimeout(() => {
            succ()
        }, time * 800);
    })
}

export default router_animate