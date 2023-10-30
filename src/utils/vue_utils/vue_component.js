// 全局注册组件
/**
 * export default {
        name: "组件名称",
    };
    这种注册起来太麻烦，直接用文件名称作为组件名称即可
 */
//#region 
// import { defineAsyncComponent } from 'vue';
// const vue_component = (vue) => {
//     // const modules = require.context('../../components/overall_situation_components', true, /\.vue$/)
//     // const modules = import.meta.globEager('/src/component/overall_situation_components/**/*.vue');
//     if (!Object.keys(modules).length) return;
//     for (const path in modules) {
//         const list = path.split("/")
//         const name = `T-${list.at(-1).replace(".vue", "").trim()}`
//         const lazyComponent = defineAsyncComponent(
//             {
//                 //异步加载组件
//                 loader: () => import(path),
//                 //异步等待时间
//                 delay: 100,
//                 //最长等待时间
//                 timeout: 3000,
//                 //加载中的占位组件
//                 // loadingComponent: '<div>Loading</div>',
//             }
//         )
//         vue.component(name, lazyComponent)
//         //已知BUG:在edge浏览器中，会概率出现组件未注册(10次刷新约3次会出现，谷歌正常
//         //正在考虑换成传统的导入
//         /* modules[path]().then((mod) => {
//              vue.component(name, mod.default || mod)
//          })*/
//     }
// }
//#endregion

//传统方式
import button from '@/components/overall_situation_components/button.vue'
import dialog from '@/components/overall_situation_components/dialog.vue'
import tabs from '@/components/overall_situation_components/tabs.vue'

const component = {
    button,
    dialog,
    tabs
}
const vue_component = (vue) => {
    for (let item in component) {
        console.log(item);
        vue.component(`T-${item}`, component[item])
    }
}
export default vue_component