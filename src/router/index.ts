import { createRouter, createWebHashHistory } from 'vue-router'
import NetAjax from '@/components/NetAjax.vue'
import NetAxios from '@/components/NetAxios.vue'
import NetFetch from '@/components/NetFetch.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/fetch'
        },
        {
            name: 'ajax',
            path: '/ajax',
            component: NetAjax
        },
        {
            name: 'axios',
            path: '/axios',
            component: NetAxios
        },
        {
            name: 'fetch',
            path: '/fetch',
            component: NetFetch
        }
    ]
})
export default router
