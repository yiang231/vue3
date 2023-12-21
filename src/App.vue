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
</template>

<script>
import components_Person from '@/components/Person.vue'
import components_Car from '@/components/Car.vue'
import components_Book from '@/components/Book.vue'
import components_Computed from '@/components/Computed.vue'
import components_Watch from '@/components/Watch.vue'

export default {
    // 组件名
    name: 'App',
    components: {
        components_Person,
        components_Car,
        components_Book,
        components_Computed,
        components_Watch
    }
}
</script>

<style></style>
