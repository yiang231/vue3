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
    <hr />
    <components_Ts a="哈哈" b="呵呵" v-bind:list="personList" />
    <hr />
    <components_LifeCycle v-if="isShow" />
    <hr />
    <components_Shallow />
    <hr />
    <ReadOnly />
    <hr />
    <components_Raw />
    <hr />
    <CustomRef />
    <hr />
    <ModalOuter />
    <hr />
    <SuspenseOuter />
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { type Persons } from '@/types'
import components_Person from '@/components/Person.vue'
import components_Car from '@/components/Car.vue'
import components_Book from '@/components/Book.vue'
import components_Computed from '@/components/Computed.vue'
import components_Watch from '@/components/Watch.vue'
import components_WatchEffect from '@/components/WatchEffect.vue'
import components_RefAttr from '@/components/RefAttr.vue'
import components_Ts from '@/components/Ts.vue'
import components_LifeCycle from '@/components/LifeCycle.vue'
import components_Shallow from '@/components/Shallow.vue'
import ReadOnly from '@/components/ReadOnly.vue'
import components_Raw from '@/components/Raw.vue'
import CustomRef from '@/components/CustomRef.vue'
import ModalOuter from '@/components/ModalOuter.vue'
import SuspenseOuter from '@/components/SuspenseOuter.vue'

let refAttr = ref()
let personList = reactive<Persons>([
    { id: 'a', name: 'a', age: 1 },
    { id: 'b', name: 'b', age: 2 },
    { id: 'c', name: 'c', age: 3 }
])

function showLog() {
    // 获取的是组件实例对象
    console.log(refAttr.value)
}

let isShow = ref(true)
</script>

<style scoped>
button {
    margin: 0 5px;
}
</style>
