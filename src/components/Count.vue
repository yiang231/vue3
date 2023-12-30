<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}，放大后为：{{ bigSum }}</h2>
        <h3>欢迎来到位于{{ address }}の{{ school }}，大写为{{ upperSchool }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">减</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'components_Count'
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia'

// let sum = ref(1)
// 选择的数字
let n = ref(1)
const countStore = useCountStore()
// pinia 中的响应式对象解构
const { sum, school, address, bigSum, upperSchool } = storeToRefs(countStore)
function add() {
    // pinia 中修改数据的第一种方式，拿到后直接修改
    // countStore.sum += n.value

    // pinia 中修改数据的第二种方式，批量修改
    // countStore.$patch({
    //     sum: 666,
    //     school: '尚硅谷',
    //     address: '北京'
    // })

    // pinia 中修改数据的第三种方式，使用 actions
    countStore.increment(n.value)
}

function sub() {
    countStore.$state.sum -= n.value
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>
