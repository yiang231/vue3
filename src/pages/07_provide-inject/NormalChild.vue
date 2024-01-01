<template>
    <div class="child">
        <h3>我是子组件，不参与数据传递</h3>
        <GrandChild />
    </div>
</template>

<script setup lang="ts">
import GrandChild from './InjectGrandChild.vue'
</script>

<style scoped>
.child {
    margin-top: 20px;
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
}
</style>
