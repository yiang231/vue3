<script setup lang="ts">
import ModalInner from '@/components/ModalInner.vue'
</script>
<template>
    <div class="outer">
        <h2>我是Outer组件</h2>
        <img src="/favicon.ico" alt="" />
        <br />
        <ModalInner />
    </div>
</template>
<!--filter: saturate 饱和度 会影响 position: fixed 浏览器窗口的定位-->
<style scoped>
.outer {
    background-color: #ddd;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;
    filter: saturate(500%);
}
img {
    width: 10%;
}
</style>
