<template>
    <div class="dayEnglish">
        <div class="title">
            <h1>{{ ret.result.content }}</h1>
            <h1>{{ ret.result.note }}</h1>
            <!--            <h2>{{ ret.result.dateline }}</h2>-->
            <h1>{{ love.content }}</h1>
        </div>
        <div class="post">
            <img :src="ret.result.img" alt="img" @click="change()" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

let ret = reactive({
    code: 200,
    msg: '状态',
    result: {
        tts: '配乐',
        content: '原文',
        note: '译文',
        dateline: '当天时间',
        img: '图'
    }
})

function getOneDayEnglish() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.oioweb.cn/api/common/OneDayEnglish')
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
            Object.assign(ret, JSON.parse(xhr.responseText))
        }
    }
}

let format = {
    format: 'json'
}
let love = ref({
    content: '',
    code: ''
})

function getLove() {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://api.uomg.com/api/rand.qinghua')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(JSON.stringify(format))
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
            love.value = JSON.parse(xhr.responseText)
        }
    }
}

function change() {
    getLove()
}

onMounted(() => {
    getOneDayEnglish()
    getLove()
})
</script>

<style scoped>
.dayEnglish .title {
    text-align: center;
}

.dayEnglish .post {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dayEnglish .post img {
    width: 33%;
}
</style>
