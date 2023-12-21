<template>
    <div class="computed">
        <!--        v-bind:value 单向绑定，后台输入到页面-->
        <!--        v-model 双向绑定，前后可交互-->
        姓：<input v-model="firstName" type="text" /><br />
        名：<input v-model="lastName" type="text" /><br />
        <button @click="changeFullName">修改全名</button>
        <br />
        全名1：<span>{{ fullName1 }}</span
        ><br />
        全名2：<span>{{ fullName2 }}</span>
    </div>
</template>
<script lang="ts">
export default {
    name: 'components_computed'
}
</script>
<script lang="ts" setup>
import { ref, computed } from 'vue'

let firstName = ref('zhang')
let lastName = ref('san')
// 计算属性，只读 getter
let fullName1 = computed(() => {
    return change()
})
// 计算属性，可读可写
let fullName2 = computed({
    get() {
        return change()
    },
    set(val) {
        const [str1, str2] = val.split('-')
        firstName.value = str1
        lastName.value = str2
    }
})

function change() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
}

function changeFullName() {
    fullName2.value = 'Lee-Si'
}
</script>
<style scoped>
.computed {
    background-color: burlywood;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
