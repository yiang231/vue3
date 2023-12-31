<!--eslint-disable-->
<template>
    <!--eslint-disable-->
    <div class="father">
        <h3>父组件</h3>
        <h4>username: {{ username }}</h4>
        <h4>password: {{ password }}</h4>
        <!-- v-model 用在 html 标签上 -->
        <input type="text" v-model="username" />
        <br />
        <!--等价于下面-->
        <input
            type="text"
            :value="username"
            @input="username = (<HTMLInputElement>$event.target).value"
        />
        <hr />
        <!-- v-model用在组件标签上 -->
        <AtguiguInput v-model="username" />
        <hr />
        <!--对于自定义事件，$event 代表触发事件时传递的数据-->
        <AtguiguInput :modelValue="username" @update:modelValue="username = $event" />
        <hr />
        <!-- 修改 modelValue -->
        <AtguiguInput v-model:author="username" v-model:secret="password" />
    </div>
    <!--eslint-enable-->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AtguiguInput from './AtguiguInput.vue'
// 数据
let username = ref('zhangSan')
let password = ref('123456')
</script>

<style scoped>
.father {
    padding: 20px;
    background-color: rgb(165, 164, 164);
    border-radius: 10px;
}
</style>
