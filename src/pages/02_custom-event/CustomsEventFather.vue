<template>
    <div class="father">
        <h3>父组件</h3>
        <!--获取传参的同时获取事件对象-->
        <button @click="test(2, 3, $event)">点我获取事件对象</button>
        <br />
        <h4>{{ str }}</h4>
        <h4>子给的玩具：{{ toy }}</h4>
        <!--给子组件 Child 绑定事件，事件名的推荐写法 Kebab-case-->
        <Child @send-toy="saveToy" />
    </div>
</template>

<script setup lang="ts">
import Child from './CustomsEventChild.vue'
import { ref } from 'vue'
// 数据
let str = ref('你好')
let toy = ref('无')

// 子传父 用于保存传递过来的玩具
function saveToy(value: string) {
    console.log('saveToy', value)
    toy.value = value
}

function test(x: number, y: number, z) {
    str.value = '哈哈'
    console.log('test', x, y, z)
}
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}

.father button {
    margin-right: 5px;
}
</style>
