const dom = document.createElement("script")
dom.src = 'https://cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js'
const add_animate = ()=>{
    document.body.appendChild(dom)
}
const remove_animate = ()=>{
    dom.remove()
}

export {
    add_animate,
    remove_animate,
}