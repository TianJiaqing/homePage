import { createRouter, createWebHistory } from 'vue-router'
import index from "@pages/index/index.vue"
import technology_code from "@pages/technology_code/index.vue"
import biographical_notes from "@pages/biographical_notes/index.vue"


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

export { router }