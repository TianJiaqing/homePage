// 全局注册组件

/**
 * export default {
        name: "组件名称",
    };
    这种注册起来太麻烦，直接用文件名称作为组件名称即可
    
 */
const vue_component = (vue) => {

    // const modules = import.meta.globEager('/src/component/overall_situation_components/**/*.vue');
    const modules = import.meta.glob('../components/overall_situation_components/**/*.vue')
    for (const path in modules) {
        modules[path]().then((mod) => {
            const list = path.split("/")
            const name = `T-${list.at(-1).replace(".vue", "").trim()}`
            vue.component(name, mod.default)
        })
    }
}
export default vue_component