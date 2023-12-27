import { createRouter, createWebHashHistory } from 'vue-router'
import components_Home from '@/pages/Home.vue'
import components_News from '@/pages/News.vue'
import components_About from '@/pages/About.vue'
import components_Detail from '@/pages/Detail.vue'

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
            component: components_News,
            children: [
                {
                    name: 'p_news_detail',
                    // 提前占位，content? 不一定要传
                    path: 'detail/:id/:title/:content?',
                    component: components_Detail
                }
            ]
        },
        {
            name: 'p_about',
            path: '/about',
            component: components_About
        }
    ]
})
export default router
