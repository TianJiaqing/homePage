// 注册vue自定义指令工具


let _ = {
    waiting_dom: null,
    scroll_dom: null,
}

const fn = (entries) => {
    entries.forEach(item => {
        const dom = item.target
        if (item.isIntersecting) {
            // dom.classList.add(dom.dataset.animate_class)

            // const div = document.createElement('div')
            // div.className = dom.className
            // div.style.height = dom.clientHeight
            // div.style.width = dom.clientWidth


            // const parsent = dom.parentElement
            dom.style.display = 'block'
        } else {
            // dom.classList.remove(dom.dataset.animate_class)
        }
    })
}
const inter = new IntersectionObserver(fn)

//proxy代理scroll_dom，一旦发现目标元素出现，绑定滚动事件
const proxy = new Proxy(_,
    {
        get(obj, key) {
            return obj[key]
        },
        set(obj, key, val) {
            if (key == 'scroll_dom') {
                inter.observe(val)
            }
            obj[key] = val
            // proxy中的set需要有反回值，不然会报错 TypeError: 'set' on proxy: trap returned falsish for property 'scroll_dom'
            return true
        }
    })
/**
 * el 绑定元素dom
 * val 绑定的值
 * vnode 
 */
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
    if (waiting_dom) {
        waiting_dom.setAttribute('style', `
        visibility:hidden;
        `)
    }
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


const set_scroll_animate = (e) => {

}
//目标元素出现时的动画
const scroll_animate = (Vue) => {
    Vue.directive('animate', (el, val, vnode) => {

        // Object.freeze(val)
        // el.dataset.animate_class = val.value
        // const hei = el.offsetHeight
        // el.style.height = hei
        proxy.scroll_dom = el
    })
    Vue.directive("myIf", (el, binding, vnode) => {
        // 判断传过来的值是为true 如果是false取反不显示
        if (!(binding.value)) {
            // 创建一个注释元素
            const comment = document.createComment(' ');
            // 设置value值
            Object.defineProperty(comment, 'setAttribute', {
                value: () => undefined,
            });
            // 用注释节点替换 当前页面元素  
            vnode.elm = comment;
            // 下面作为初始化操作 赋值为空
            vnode.text = ' ';
            vnode.isComment = true;
            vnode.context = undefined;
            vnode.tag = undefined;
            vnode.data.directives = undefined;

            // 判断当前元素是否是组件  如果是组件的话也替换成 注释元素
            if (vnode.componentInstance) {
                vnode.componentInstance.$el = comment;
            }

            // 判断当前元素是否是文档节点或者是文档碎片节点 
            if (el.parentNode) {
                // 从 DOM 树中删除 node 节点，除非它已经被删除了。
                el.parentNode.replaceChild(comment, el);
            }
        }
        console.log('bind:只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。')
    })
}
const v_directive = (Vue) => {
    waiting(Vue);
    scroll_animate(Vue)
}

export {
    v_directive
}