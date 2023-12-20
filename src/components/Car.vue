<template>
  <div class="car">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万美金</h2>
    <button @click="changePrice()">修改价格</button>
    <hr />
    <h2>游戏列表</h2>
    <ul>
      <li v-for="game in games" v-bind:key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeGameName()">修改游戏名称</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'components_Car'
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
let car = ref({ brand: '奔驰', price: 100 })
let games = ref([
  { id: 'game1', name: '农' },
  { id: 'game2', name: '舟' },
  { id: 'game3', name: '原' }
])
function changePrice() {
  car.value.price += 10
}
function changeGameName() {
  games.value[0].name = '王者荣耀'
  games.value[1].name = '明日方舟'
  games.value[2].name = '原神启动'
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
li {
  font-size: 20px;
}
</style>
