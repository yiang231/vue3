<template>
    <div class="raw">
        <!--        <h2>年龄：{{ person.age }}</h2>-->
        <h2>姓名Raw：{{ rawPerson.name }}</h2>
        <h2>年龄Raw：{{ rawPerson.age }}</h2>
        <button @click="changeAge">点击年龄加一</button>
        <hr />
        <h2>车1：{{ car1 }}</h2>
        <h2>车2：{{ car2 }}</h2>
        <button @click="changePrice">点击增加价格</button>
    </div>
</template>
<script setup lang="ts">
import { markRaw, reactive, toRaw } from 'vue'

let person = reactive({
    age: 12,
    name: 'zhangSan'
})
// 原始对象和 toRaw 后的对象同时呈现在页面时，不生效
let rawPerson = toRaw(person)

function changeAge() {
    person.age += 1
}

// 永远标记为非响应式数据
let car1 = markRaw({ brand: '奔驰', price: 32 })
let car2 = reactive(car1)

function changePrice() {
    car2.price += 10
}

// 使用场景，不需要变成响应式的第三方库的对象，例如 mockjs
// let mock = markRaw(mockjs)
</script>
<script lang="ts">
export default {
    name: 'components_Raw'
}
</script>
<style scoped>
.raw {
    background-color: crimson;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
