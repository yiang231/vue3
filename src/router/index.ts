import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/pages/01_props/PropsFather.vue'
import CustomsEvent from '@/pages/02_custom-event/CustomsEventFather.vue'
import Mitt from '@/pages/03_mitt/Mitt_Father.vue'

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
        },
        {
            path: '/event',
            component: CustomsEvent
        },
        {
            path: '/mitt',
            component: Mitt
        }
    ]
})
