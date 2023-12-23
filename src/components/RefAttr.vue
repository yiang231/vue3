<template>
    <div class="refAttr">
        <h1>省</h1>
        <h2 ref="t2">市</h2>
        <h3>区</h3>
        <button @click="showLog">输出 H2 元素</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'components_RefAttr'
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'

// 创建一个 t2 ，用于存储 ref 标记的内容
let t2 = ref()

let a = ref('a')
let b = ref('b')
let c = ref('c')

function showLog() {
    // <h2 data-v-41aeb112="">市</h2> 获取的是 DOM 元素
    // data-v-41aeb112="" 是局部样式 <style scoped>
    console.log(t2.value)
}
// 定义组件实例对象需要暴露的内容
defineExpose({ a, c })
</script>
<style scoped>
.refAttr {
    background-color: aliceblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
