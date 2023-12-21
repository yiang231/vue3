<template>
    <components_Person />
    <hr />
    <components_Car />
    <hr />
    <components_Book />
    <hr />
    <components_Computed />
</template>

<script>
import components_Person from '@/components/Person.vue'
import components_Car from '@/components/Car.vue'
import components_Book from '@/components/Book.vue'
import components_Computed from '@/components/Computed.vue'

export default {
    // 组件名
    name: 'App',
    components: { components_Person, components_Car, components_Book, components_Computed }
}
</script>

<style></style>
