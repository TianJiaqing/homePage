import {
    createRouter,
    createWebHistory
} from "vue-router";
import index from "@pages/index/index.vue";
import technology_code from "@pages/technology_code/index.vue";
import biographical_notes from "@pages/biographical_notes/index.vue";
import bookmark from "@pages/bookmark/index.vue";
import bolg from "@pages/bolg/index.vue";

import router_animate from "./router_animate.js";

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
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log('设置o');
        return {
            el:document.querySelector ('#body_scroll_full'),
            top: 0,
        }
    }
});

router.beforeEach((to, from, next) => {
    //路由动画效果
    router_animate().then((res) => {
        next();
    });
    //摒弃路由跳转动画，直接next()
    // next()
});

export {
    router
};