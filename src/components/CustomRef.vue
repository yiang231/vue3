<template>
    <div class="customRef">
        <h2>{{ msg }}</h2>
        <input type="text" v-model="msg" />
    </div>
</template>
<script setup lang="ts">
import useMsg from '@/hooks/useMsg'

const { msg } = useMsg('你好', 1000)
</script>
<style scoped>
.customRef {
    background-color: darkorange;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
