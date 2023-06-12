import { createRouter, createWebHistory } from 'vue-router'
import index from "@pages/index/index.vue"
import technology_code from "@pages/technology_code/index.vue"
import biographical_notes from "@pages/biographical_notes/index.vue"
import router_animate from './router_animate.js'


const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/technology_code',
        component: technology_code
    },
    {
        path: '/biographical_notes',
        component: biographical_notes,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // router_animate().then(res => {
    //     next()
    // })
    next()

})

export { router }