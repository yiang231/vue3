// 引入 createApp 创建应用
import { createApp } from 'vue'
// 引入 App 根组件
import App from '@/App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
