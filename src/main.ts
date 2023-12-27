// 引入 createApp 创建应用
import { createApp } from 'vue'
// 引入 App 根组件
import App from '@/App.vue'
import router from '@/router'
const app = createApp(App)
app.use(router)
app.mount('#app')
