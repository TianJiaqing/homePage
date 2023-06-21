//create_dom_full_screen 创建的全局div元素
let create_dom_full_screen = null

/**
 * dom_full_screen
 * 某图片元素进行全屏放大
 * */
const dom_full_screen = (el, params = { top: 0, left: 0 }, color = "#fff") => {
    // const create_dom_full_screen = dom.querySelector(".create_dom_full_screen")
    const body = document.body
    //克隆目标节点，赋值css样式
    const new_el = el.cloneNode('deep')
    new_el.classList.add("p_r")
    const style_arr = Object.keys(params)
    let str = style_arr.reduce((pre, next) => {
        return `${pre}${next}:${params[next]}px;`
    }, '')
    if (!params.width && !params.height) {
        str+='width:30vw;height:90vh;'
    }
    new_el.style = `${str}display:inline-block;overflow:hidden`
    //找到克隆节点下的img标签，赋值css
    const img = new_el.querySelector('img')
    img.style = 'width:100%;'

    //创建全屏div元素，赋值css样式
    const dom = document.createElement("div")
    dom.style = `width:30vw;height:100vh;background:${color};z-index:9999`
    dom.classList.add("p_f", "t0_l0", "create_dom_full_screen")
    dom.appendChild(new_el)
    body.appendChild(dom)
    create_dom_full_screen = dom
    setTimeout(() => {
        new_el.classList.add("dom_full_screen")
    }, 100);

}


// 查看是否存在创建的元素
const search_dom = () => {
    // const create_dom_full_screen = dom.querySelector(".create_dom_full_screen")
    if (create_dom_full_screen) {
        return true
    }
    return false
}


//清除所创建的dom
const clear_dom = () => {
    if (create_dom_full_screen) {
        create_dom_full_screen.remove()
        create_dom_full_screen = null
    }
}

export {
    dom_full_screen,
    clear_dom,
    search_dom
} 