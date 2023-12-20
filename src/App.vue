<template>
  <components_Person />
  <hr />
  <components_Car />
</template>

<script>
import components_Person from '@/components/Person.vue'
import components_Car from '@/components/Car.vue'
export default {
  // 组件名
  name: 'App',
  components: { components_Person, components_Car }
}
</script>

<style></style>
