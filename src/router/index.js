import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import index from "@pages/index/index.vue";
import technology_code from "@pages/technology_code/index.vue";
import technology_detail from "@pages/technology_code/components/detail.vue";
import biographical_notes from "@pages/biographical_notes/index.vue";
import bookmark from "@pages/bookmark/index.vue";
import bolg from "@pages/bolg/index.vue";
import bolg_detail from "@pages/bolg/components/bolg.vue";
import piggy_bank from "@pages/piggy_bank/index.vue";
import music from "@pages/music/index.vue";
import music_home from "@pages/music/components/home.vue"


import router_animate from "./router_animate.js";

import use_path_name from "_hook/path_name.js";

//忽略路由跳转动画
//数组元素为路由路径
const ignore_router_animate_arr = ['/bolg_detail']
//导航栏信息
const layout_routes =
    [
        {
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
            meta: {
                title: "MARK",
                icon: "icon-shuqian",
                subtitle: "标签"
            }
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
        {
            path: "/music",
            component: music,
            meta: {
                title: "MUSIC",
                icon: "icon-yinle",
                subtitle: "音乐",
            }
        },
        // {
        //     path: "/piggy_bank",
        //     component: piggy_bank,
        //     meta: {
        //         title: "BANK",
        //         icon: "icon-cunqianguan",
        //         subtitle: "钱是攒出来的"
        //     }
        // },

    ]
//其它路由信息
const routes = [
    {
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
    routes: [...layout_routes, ...routes,]
});

router.beforeEach((to, from, next) => {
    const { path } = to
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
export {
    router,
    routes,
    layout_routes
};