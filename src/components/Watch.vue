<template>
    <div class="watch">
        <h1>情况一：监视 ref 定义的基本类型数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum()">修改求和</button>
        <hr />
        <h1>情况二：监视 ref 定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changePersonName()">修改名字</button>
        <button @click="changePersonAge()">修改年龄</button>
        <button @click="changePerson()">修改人</button>
    </div>
</template>
<script lang="ts">
export default {
    name: 'components_Watch'
}
</script>
<script lang="ts" setup>
import { ref, watch } from 'vue'

let sum = ref(0)

function changeSum() {
    sum.value += 1
}

const stopWatch1 = watch(sum, (value, oldValue) => {
    console.log('sum changed', value, oldValue)
    if (value >= 5) {
        // 停止监视
        stopWatch1()
    }
})
let person = ref({
    name: '张三',
    age: 12
})

function changePersonName() {
    person.value.name += '@'
}

function changePersonAge() {
    person.value.age += 1
}

function changePerson() {
    person.value = { name: '李四', age: 43 }
}

watch(
    // 被监视的对象
    person,
    // 监视的回调函数
    (value, oldValue) => {
        console.log('person changed', value, oldValue)
    },
    // 配置对象
    {
        // 深度监视，监视属性变化，地址值不变则认为没变化
        deep: true,
        // 页面一刷新就开始监视
        immediate: true
    }
)
</script>
<style scoped>
.watch {
    background-color: magenta;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
