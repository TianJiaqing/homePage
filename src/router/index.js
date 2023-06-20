import {
    createRouter,
    createWebHistory
} from "vue-router";
import index from "@pages/index/index.vue";
import technology_code from "@pages/technology_code/index.vue";
import biographical_notes from "@pages/biographical_notes/index.vue";
import bookmark from "@pages/bookmark/index.vue";
import bolg from "@pages/bolg/index.vue";
import bolg_detail from "@pages/bolg/components/bolg.vue";

import router_animate from "./router_animate.js";

//忽略路由跳转动画
//数组元素为路由路径
const ignore_router_animate_arr = ['/bolg_detail']

const routes = [{
    path: "/",
    component: index,
},
{
    path: "/technology_code",
    component: technology_code,
},
{
    path: "/biographical_notes",
    component: biographical_notes,
},
{
    path: "/bookmark",
    component: bookmark,
},
{
    path: "/bolg",
    component: bolg,
},
{
    path: "/bolg_detail",
    component: bolg_detail,
}
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const { path } = to
    if (ignore_router_animate_arr.includes(path)) {
        //摒弃路由跳转动画，直接next()
        next();
        return
    }
    //路由动画效果
    router_animate().then((res) => {
        next();
    });
});

export {
    router
};