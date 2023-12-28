import { createRouter, createWebHashHistory } from 'vue-router'
import components_Home from '@/pages/Home.vue'
import components_News from '@/pages/News.vue'
import components_About from '@/pages/About.vue'
import components_Detail from '@/pages/Detail.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            // 重定向，解决首页默认页面问题
            path: '/',
            redirect: '/home'
        },
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
                    // path: 'detail/:id/:title/:content?',
                    path: 'detail',
                    component: components_Detail,
                    // 1、将路由收到的所有的 params 参数作为 props 传给路由组件
                    // props: true

                    // 2、写成函数，自己决定传什么作为 props 传给路由组件，配合 query 使用
                    props(route) {
                        return route.query
                    }

                    // 3、写成对象，无法被引入的组件来传值
                    // props: {
                    //     id: 'id',
                    //     title: 'title',
                    //     content: 'content'
                    // }
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
