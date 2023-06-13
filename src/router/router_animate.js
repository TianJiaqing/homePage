/**
 * 路由跳转动画js文件
 * 建议搭配style.css文件的动画效果一起查阅
 * 返回值为promise，暂无fail的处理
 */


let body = null
// const body = document.querySelector(".scroll_full")
//背景板块个数
const num = 9
//动画执行时间（s），要与css中的animate动画保持一致
const time = 1
//返回promise对象
const router_animate = () => {
    return new Promise((succ, fail) => {
        if (!body) {
            body = document.querySelector(".scroll_full")
        }
        const div = document.createElement("div")
        //记录页面右边元素的width
        const wid = body.offsetWidth
        div.classList.add("vue_router")
        //设置--wid变量，css动画中需要使用，这里写的有点乱了，应该把--wid挂到body元素上比较好
        div.style = `width:${wid}px;--wid:${wid}px;`
        for (let i = 0; i < num; i++) {
            const list = document.createElement("div")
            list.classList.add("vue_router_list")
            //重点：背景图的偏移量 = 当前个数 / 总方块个数 * 背景总长度
            list.style.backgroundPosition = `-${i / num * wid}px center`
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