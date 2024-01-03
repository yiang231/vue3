<script setup lang="ts">
import SuspenseInner from '@/components/SuspenseInner.vue'
</script>

<template>
    <div class="outer">
        <h2>我是 Outer 组件</h2>
        <!--异步加载子组件，需要同时实现两个插槽方法-->
        <Suspense>
            <template #default>
                <SuspenseInner />
            </template>
            <template #fallback>
                <h3>加载中，请稍后</h3>
            </template>
        </Suspense>
    </div>
</template>

<style scoped>
.outer {
    background-color: aquamarine;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}
</style>
