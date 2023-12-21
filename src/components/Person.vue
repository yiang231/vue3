<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'components_Person'
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
// 数据
// 基本类型响应式数据
let name = ref('张三')
let age = ref(12)
let tel = '123465789'
let address = '监狱'

// 方法
function changeName() {
    if (name.value === 'zhangSan') {
        name.value = '张三'
    } else {
        name.value = 'zhangSan'
    }
}

function changeAge() {
    age.value += 1
}

function showTel() {
    alert(tel)
}
</script>
<style scoped>
.person {
    background-color: cyan;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
