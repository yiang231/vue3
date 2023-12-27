<template>
    <div class="about">
        <h2>大家好，欢迎来到尚硅谷直播间</h2>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
    console.log('about 挂载了')
})
onUnmounted(() => {
    console.log('about 卸载了')
})
</script>
<script lang="ts">
export default {
    name: 'components_About'
}
</script>
<style scoped>
.about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
}
</style>
