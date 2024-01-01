import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/pages/01_props/PropsFather.vue'
import CustomsEvent from '@/pages/02_custom-event/CustomsEventFather.vue'
import Mitt from '@/pages/03_mitt/Mitt_Father.vue'
import VModel from '@/pages/04_v-model/VModelFather.vue'
import Attrs from '@/pages/05_$attrs/AttrsFather.vue'
import RefsChildrenParent from '@/pages/06_$refs-$parent/ParentFather.vue'
import ProvideInject from '@/pages/07_provide-inject/ProvideFather.vue'

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
        },
        {
            path: '/model',
            component: VModel
        },
        {
            path: '/attrs',
            component: Attrs
        },
        {
            path: '/refs-parent',
            component: RefsChildrenParent
        },
        {
            path: '/provide-inject',
            component: ProvideInject
        }
    ]
})
