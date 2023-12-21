<template>
    <div class="car">
        <h2>一辆{{ car1.brand }}车，价值{{ car1.price }}万美金</h2>
        <h2>两辆{{ car2.brand }}车，价值{{ car2.price }}万美金</h2>
        <button @click="changePrice()">修改价格</button>
        <button @click="changeBrand()">修改品牌</button>
        <button @click="changeCar1()">修改车子1</button>
        <button @click="changeCar2()">修改车子2</button>
        <hr />
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum()">修改求和</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'components_Car'
}
</script>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

let car1 = ref({ brand: '奔驰', price: 100 })
let car2 = reactive({ brand: '奔驰', price: 100 })
let sum = ref(0)

function changePrice() {
    car1.value.price += 10
}

function changeBrand() {
    car1.value.brand = '问界'
}

function changeCar1() {
    // 替换 ref 对象
    car1.value = { brand: '劳斯莱斯', price: 3000 }
}

function changeCar2() {
    // 替换 reactive 对象，将除了第一个对象外的所有对象赋值给第一个对象
    Object.assign(car2, { brand: '劳斯莱斯', price: 5000 })
}

function changeSum() {
    sum.value += 1
}
</script>
<style scoped>
.car {
    background-color: bisque;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
