<template>
    <components_Person />
    <hr />
    <components_Car />
    <hr />
    <components_Book />
    <hr />
    <components_Computed />
    <hr />
    <components_Watch />
    <hr />
    <components_WatchEffect />
    <hr />
    <components_RefAttr ref="refAttr" />
    <br />
    <button @click="showLog">展示refAttr</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

let refAttr = ref()

function showLog() {
    // 获取的是组件实例对象
    console.log(refAttr.value)
}
</script>
<script lang="ts">
import components_Person from '@/components/Person.vue'
import components_Car from '@/components/Car.vue'
import components_Book from '@/components/Book.vue'
import components_Computed from '@/components/Computed.vue'
import components_Watch from '@/components/Watch.vue'
import components_WatchEffect from '@/components/WatchEffect.vue'
import components_RefAttr from '@/components/RefAttr.vue'

export default {
    // 组件名
    name: 'App',
    components: {
        components_Person,
        components_Car,
        components_Book,
        components_Computed,
        components_Watch,
        components_WatchEffect,
        components_RefAttr
    }
}
</script>

<style scoped>
button {
    margin: 0 5px;
}
</style>
