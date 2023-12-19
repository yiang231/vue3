<template>
  <div class="app">
    <h1>你好啊！</h1>
    <components_Person />
  </div>
</template>

<script>
import components_Person from '@/components/Person.vue'
export default {
  // 组件名
  name: 'App',
  components: { components_Person }
}
</script>

<style>
.app {
  background-color: azure;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
