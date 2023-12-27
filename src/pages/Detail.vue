<template>
    <ul class="news-list">
        <li>编号：{{ params.id }}</li>
        <li>标题：{{ params.title }}</li>
        <li>内容：{{ params.content }}</li>
    </ul>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
// 响应式对象进行解构，需要使用 toRefs() 包裹
let { params } = toRefs(useRoute())
</script>
<script lang="ts">
export default {
    name: 'components_Detail'
}
</script>

<style scoped>
.news-list {
    list-style: none;
    padding-left: 20px;
}

.news-list > li {
    line-height: 30px;
}
</style>
