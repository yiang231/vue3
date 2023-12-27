import { createRouter, createWebHashHistory } from 'vue-router'
import components_Home from '@/pages/Home.vue'
import components_News from '@/pages/News.vue'
import components_About from '@/pages/About.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'p_home',
            path: '/home',
            component: components_Home
        },
        {
            name: 'p_news',
            path: '/news',
            component: components_News
        },
        {
            name: 'p_about',
            path: '/about',
            component: components_About
        }
    ]
})
export default router
