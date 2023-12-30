import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/pages/01_props/PropsFather.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            // 重定向，解决首页默认页面问题
            path: '/',
            redirect: '/props'
        },
        {
            path: '/props',
            component: Props
        }
    ]
})
