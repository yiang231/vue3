<template>
    <!--eslint-disable-->
    <!--对于原生事件 $event 代表事件对象-->
    <input
        type="text"
        :value="modelValue"
        @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"
    />
    <br />
    <input
        type="text"
        :value="author"
        @input="emit('update:author', (<HTMLInputElement>$event.target).value)"
    />
    <br />
    <input
        type="text"
        :value="secret"
        @input="emit('update:secret', (<HTMLInputElement>$event.target).value)"
    />
    <!--eslint-enable-->
</template>

<script setup lang="ts">
defineProps(['author', 'secret', 'modelValue'])
const emit = defineEmits(['update:author', 'update:secret', 'update:modelValue'])
</script>

<style scoped>
input {
    border: 2px solid black;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    font-size: 20px;
    color: rebeccapurple;
}
</style>
