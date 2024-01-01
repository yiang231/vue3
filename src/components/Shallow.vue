<template>
    <div class="shallow">
        <h1>浅层次响应式对象</h1>
        <h2>求和为：{{ sum }}</h2>
        <h2>名字为：{{ person.name }}</h2>
        <h2>年龄为：{{ person.age }}</h2>
        <h2>汽车品牌为：{{ car.brand }}</h2>
        <h2>汽车颜色为：{{ car.frame.color }}</h2>
        <h2>汽车引擎为：{{ car.frame.engine }}</h2>
        <button @click="changeSum">sum+1</button>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
        <hr />
        <button @click="changeBrand">修改品牌</button>
        <button @click="changeColor">修改颜色</button>
        <button @click="changeEngine">修改发动机</button>
    </div>
</template>
<script setup lang="ts">
import { shallowReactive, shallowRef } from 'vue'

let sum = shallowRef(0)
let person = shallowRef({
    name: 'zhangSan',
    age: 32
})
let car = shallowReactive({
    brand: '奔驰',
    frame: {
        color: '红色',
        engine: 'V8'
    }
})

function changeSum() {
    sum.value += 1
}

function changeName() {
    person.value.name = '李四'
}

function changeAge() {
    person.value.age = 1
}

function changePerson() {
    person.value = { name: 'tony', age: 100 }
}

function changeBrand() {
    car.brand = '宝马'
}

function changeColor() {
    car.frame.color = '紫色'
}

function changeEngine() {
    car.frame.engine = 'V12'
}
</script>
<script lang="ts">
export default {
    name: 'components_Shallow'
}
</script>

<style scoped>
.shallow {
    background-color: deepskyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
