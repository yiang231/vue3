<template>
    <div class="readonly">
        <h1>所有层次只读【深只读副本】</h1>
        <h2>当前sum1为：{{ sum1 }}</h2>
        <h2>当前sum2为：{{ sum2 }}</h2>
        <button @click="changeSum1">点我sum1+1</button>
        <button @click="changeSum2">点我sum2+1</button>
        <br />
        <h2>当前car1为：{{ car1 }}</h2>
        <button @click="changeBrand1">修改品牌(car1)</button>
        <button @click="changeColor1">修改颜色(car1)</button>
        <button @click="changePrice1">修改价格(car1)</button>
        <hr />
        <h1>浅层次只读【只处理顶层属性】</h1>
        <h2>当前car2为：{{ car2 }}</h2>
        <button @click="changeBrand2">修改品牌(car2)</button>
        <button @click="changeColor2">修改颜色(car2)</button>
        <button @click="changePrice2">修改价格(car2)</button>
    </div>
</template>
<script setup lang="ts">
import { reactive, readonly, ref, shallowReadonly } from 'vue'

let sum1 = ref(0)
// 必须是响应式对象
let sum2 = readonly(sum1)
let car1 = reactive({
    brand: '奔驰',
    frame: {
        color: 'red',
        price: 43
    }
})
// 浅层次只读
let car2 = shallowReadonly(car1)

function changeSum1() {
    sum1.value += 1
}

function changeSum2() {
    sum2.value += 1
}

function changeBrand1() {
    car1.brand = '比亚迪'
}

function changeColor1() {
    car1.frame.color = 'white'
}

function changePrice1() {
    car1.frame.price += 1
}

function changeBrand2() {
    car2.brand = '宝马'
}

function changeColor2() {
    car2.frame.color = 'green'
}

function changePrice2() {
    car2.frame.price += 1
}
</script>
<style scoped>
.readonly {
    background-color: fuchsia;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
