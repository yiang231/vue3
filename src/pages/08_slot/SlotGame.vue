<template>
    <div class="game">
        <h2>游戏列表</h2>
        <slot name="default" :games="games" x="嘿嘿" y="哈哈"></slot>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { nanoid } from 'nanoid'

let games = reactive([
    { id: nanoid, name: '英雄联盟' },
    { id: nanoid, name: '王者农药' },
    { id: nanoid, name: '红色警戒' },
    { id: nanoid, name: '斗罗大陆' }
])
</script>

<style scoped>
.game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
</style>
