//全局vue方法
import {
    render,
    createVNode
} from 'vue'
import dialog from '@/components/overall_situation_components/dialog.vue'
const Z_INDEX = 999
const $confirm = (options) => {
    const flg = true
    return new Promise((succ, fail) => {
        //创建容器
        const container = document.createElement("div")
        container.style = `position:fixed;z-index:${Z_INDEX};`
        //创建虚拟dom
        const vm = createVNode(dialog, {
            flg,
            ...options,
            onCloseDialog: (val) => {
                if (val == 2) {
                    //容器自我移除
                    container.remove()
                    succ(val)
                } else {
                    fail(val)
                }
            },
            style: {
                'z-index': Z_INDEX,
            }
        })
        //虚拟dom渲染至container上
        render(vm, container)
        //渲染容器
        document.querySelector('body').appendChild(container)
    })
}
export {
    $confirm
}