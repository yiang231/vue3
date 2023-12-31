<template>
    <div class="child2">
        <h3>子组件2</h3>
        <h4>电脑：{{ computer }}</h4>
        <h4>哥哥给的玩具：{{ toy }}</h4>
    </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import emitter from '@/utils/emitter'
// 数据
let computer = ref('联想')
let toy = ref('')

// 给 emitter 绑定 send-toy 事件
emitter.on('send-toy', (value: any) => {
    toy.value = value
})
// 在组件卸载时解绑 send-toy 事件
onUnmounted(() => {
    emitter.off('send-toy')
})
</script>

<style scoped>
.child2 {
    margin-top: 50px;
    background-color: orange;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>
