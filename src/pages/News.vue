<template>
    <div class="news">
        <ul>
            <li v-for="{ id, title, content } in newsList" :key="id">
                <RouterLink
                    :to="{
                        name: 'p_news_detail',
                        path: '/news/detail',
                        query: {
                            id: id,
                            title: title,
                            content: content
                        }
                    }"
                    >{{ title }}
                </RouterLink>
                <!--                <RouterLink :to="`/news/detail?id=${id}&title=${title}&content=${content}`">{{
                                    title
                                }}</RouterLink>-->
                <!--                <RouterLink to="/news/detail?a=哈哈&b=嘿嘿&c=呵呵"> {{ news.title }}</RouterLink>-->
            </li>
        </ul>
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const newsList = reactive([
    { id: 'a', title: '游戏1', content: '原神' },
    { id: 'b', title: '游戏2', content: '王者荣耀' },
    { id: 'c', title: '游戏3', content: '元神' },
    { id: 'd', title: '游戏4', content: '阴阳师' }
])
</script>
<script lang="ts">
export default {
    name: 'components_News'
}
</script>

<style scoped>
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    /*list-style: none;*/
    padding-left: 10px;
}

.news li::marker {
    color: chartreuse;
}

.news li > a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967e;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>
