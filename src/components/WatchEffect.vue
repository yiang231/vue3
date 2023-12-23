<template>
    <div class="watchEffect">
        <h2>当前深度为： {{ wet }} M</h2>
        <h2>当前湿度为： {{ temp }} ℃</h2>
        <button @click="changeWet">深度增加</button>
        <button @click="changeTemp">湿度增加</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'components_WatchEffect'
}
</script>
<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue'

let wet = ref(0)
let temp = ref(20)

function changeWet() {
    wet.value += 10
}

function changeTemp() {
    temp.value += 10
}

watch([temp, wet], (value) => {
    // 需要明确指出要监视的属性
    let [newTemp, newWet] = value
    if (newTemp >= 60 || newWet >= 80) {
        console.log(value)
    }
})

watchEffect(() => {
    // 一上来就会被执行
    // 调用哪些数据就监视哪些属性
    if (temp.value >= 100 || wet.value >= 180) {
        console.log('request')
    }
})
</script>
<style scoped>
.watchEffect {
    background-color: crimson;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
