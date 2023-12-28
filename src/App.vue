<template>
    <div class="app">
        <components_Header />
        <div class="navigate">
            <!--字符串写法-->
            <!--无法回到来时的页面-->
            <RouterLink replace to="/home" active-class="active">首页</RouterLink>
            <!--对象写法_1-->
            <RouterLink :to="{ name: 'p_news' }" active-class="active">新闻</RouterLink>
            <!--对象写法_2-->
            <RouterLink :to="{ path: '/about' }" active-class="active">关于</RouterLink>
        </div>
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>
<script lang="ts">
import components_Header from '@/components/Header.vue'

export default {
    // 组件名
    name: 'App',
    components: {
        components_Header
    }
}
</script>

<style scoped>
.navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}

.navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
}

.navigate a.active {
    background-color: #64967e;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 'Microsoft YaHei UI', serif;
}

.content {
    margin: 30px auto 0;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
}
</style>
