<template>
    <div class="lc">
        <h2>当前求和为：{{ sum }}</h2>
        <h2>乘十后为：{{ bigSum }}</h2>
        <button @click="changeSum">点击加一</button>
        <hr />
        <img v-for="(dog, index) in dogs" :src="dog" :key="index" alt="" />
        <br />
        <button @click="getDog">增加狗</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'components_LifeCycle'
}
</script>
<script lang="ts" setup>
import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    onUnmounted,
    onUpdated
} from 'vue'
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const { sum, changeSum, bigSum } = useSum()
const { dogs, getDog } = useDog()

console.log('setup auto created')
onBeforeMount(() => {
    console.log('beforeMount')
})
onMounted(() => {
    console.log('mounted')
})
onBeforeUpdate(() => {
    console.log('beforeUpdate')
})
onUpdated(() => {
    console.log('updated')
})
onBeforeUnmount(() => {
    console.log('beforeUnmount')
})
onUnmounted(() => {
    console.log('unmounted')
})
</script>
<style scoped>
.lc {
    background-color: hotpink;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}

img {
    height: 200px;
    margin-right: 10px;
}
</style>
