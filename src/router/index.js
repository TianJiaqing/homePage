import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import index from "@pages/index/index.vue";
import technology_code from "@pages/technology_code/index.vue";
import biographical_notes from "@pages/biographical_notes/index.vue";
import bookmark from "@pages/bookmark/index.vue";
import bolg from "@pages/bolg/index.vue";
import bolg_detail from "@pages/bolg/components/bolg.vue";
import music_home from "@pages/music/components/home.vue"


import router_animate from "./router_animate.js";
import use_path_name from "_hook/path_name.js";
//bookmark子路由信息
import bookmark_children from './utils/bookmark'

//忽略路由跳转动画
//数组元素为路由路径
const ignore_router_animate_arr = ['/bolg_detail']
//导航栏信息
const layout_routes = [{
        path: "/",
        component: index,
        meta: {
            title: 'HOME',
            icon: "icon-iconhuaban1-15",
            subtitle: "一个简单的首页"
        }
    },
    {
        path: "/technology_code",
        component: technology_code,
        meta: {
            title: "PYQ",
            icon: "icon-keji",
            subtitle: "去看一看梦里的风"
        },
    },
    {
        path: "/biographical_notes",
        component: biographical_notes,
        meta: {
            title: "ME",
            icon: "icon-jianli",
            subtitle: "今日方知我是我"

        }
    },
    {
        path: "/bookmark",
        component: bookmark,
        redirect: "/bookmark/table",
        meta: {
            title: "MARK",
            icon: "icon-shuqian",
            subtitle: "标签"
        },
    },
    {
        path: "/bolg",
        component: bolg,
        meta: {
            title: "BOLG",
            icon: "icon-boke1",
            subtitle: "标签2"
        }
    },
]
//其它路由信息
const routes = [{
        path: "/bolg_detail",
        component: bolg_detail,
    },
    {
        path: "/music/home",
        component: music_home,
        meta: {
            show_layout: 'hidden',
        }
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: [...layout_routes, ...routes, ]
});
router.addRoute({
    path: "/bookmark",
    component: bookmark,
    redirect: "/bookmark/table",
    meta: {
        title: "MARK",
        icon: "icon-shuqian",
        subtitle: "标签"
    },
    children: bookmark_children
})
router.beforeEach((to, from, next) => {
    const {
        path
    } = to
    use_path_name.set_path_name(path)
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
//单页面路由跳转滚动条问题
router.afterEach((to, from, next) => {
    // scroll_top(from.path)
})
export {
    router,
    routes,
    layout_routes
};