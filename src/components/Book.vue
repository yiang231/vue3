<template>
  <div class="book">
    <h2>名字1： {{ book.name }}</h2>
    <h2>价格1： {{ book.price }}</h2>
    <h2>名字2： {{ name }}</h2>
    <h2>价格2： {{ price }}</h2>
    <h2>时间： {{ time }}</h2>
    <button @click="changeName1">修改名字1</button>
    <button @click="changePrice1">修改价格1</button>
    <button @click="changeName2">修改名字2</button>
    <button @click="changePrice2">修改价格2</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'components_Book'
}
</script>
<script lang="ts" setup>
// 将 reactive 定义的响应式对象的每一个属性变成新的 ref 响应式对象
// 改变 ref 对象的值，将改变原来 reactive 对应的属性值
import { toRef, toRefs, reactive } from 'vue'

let book = reactive({
  name: '科幻小说',
  price: 23,
  time: 2023
})
/**
 * 解构对象，相当于
 * let name = book.name
 * let price = book.price
 */
let { name, price } = toRefs(book)
let time = toRef(book, 'time')

function changeName1() {
  book.name += '###'
}

function changePrice1() {
  book.price += 1
}

function changeName2() {
  name.value = '@@' + name.value
}

function changePrice2() {
  price.value += 2
}
</script>
<style scoped>
.book {
  background-color: chartreuse;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>
