<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>a: {{ a }}</h4>
        <h4>c: {{ c }}</h4>
        <!--获取到父组件传了，子组件并未在 defineProps 主动获取的值-->
        <h4>others: {{ $attrs }}</h4>
        <!--祖孙双向通信-->
        <GrandChild v-bind="$attrs" />
    </div>
</template>

<script setup lang="ts">
import GrandChild from './AttrsGrandChild.vue'

defineProps(['a', 'c'])
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
