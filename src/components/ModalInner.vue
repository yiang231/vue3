<script setup lang="ts">
import { ref } from 'vue'

let isShow = ref(false)
</script>
<template>
    <button @click="isShow = true">点击展示弹窗</button>
    <!--将子组件放置到 to 指定的位置-->
    <teleport to="body">
        <div class="inner" v-show="isShow">
            <h2>我是Inner组件</h2>
            <h3>我是弹窗内容</h3>
            <button @click="isShow = false">关闭弹窗</button>
        </div>
    </teleport>
</template>

<style scoped>
.inner {
    width: 200px;
    height: 150px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 20px;
    margin-left: -100px;
}
</style>
