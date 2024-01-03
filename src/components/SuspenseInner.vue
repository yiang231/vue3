<script setup lang="ts">
import axios from 'axios'

let {
    data: { content: word }
} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
</script>

<template>
    <div class="inner">
        <h2>我是 Inner 组件</h2>
        <h3>我说：{{ word }}</h3>
    </div>
</template>

<style scoped>
.inner {
    background-color: deepskyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}
</style>
