<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import type { Music163 } from '@/type/Music163'

const axiosInstance = axios.create({
    baseURL: 'https://api.uomg.com/api'
})
const axiosInterceptors = axiosInstance.interceptors
axiosInterceptors.request.use((config) => {
    console.log('axios请求拦截器执行', config)
    return config
})
axiosInterceptors.response.use((resp) => {
    console.log('axios响应拦截器执行', resp)
    return resp
})
let music = ref<Music163>({ artistsname: '', name: '', picurl: '', url: '' })

async function randMusic() {
    const {
        data: { data: randM }
    } = await axiosInstance.get('/rand.music', {
        params: {
            format: 'json', // json / mp3
            sort: '新歌榜', // 选择输出分类[热歌榜|新歌榜|飙升榜|抖音榜|电音榜]，为空输出热歌榜
            mid: '' // 网易云歌单ID
        }
    })
    music.value = randM
}

async function comments() {
    const {
        data: { data: comments }
    } = await axiosInstance.post('/comments.163', {
        format: 'json', // json / text
        mid: '' // 网易云歌单ID
    })
    music.value = comments
}

function changeMusic() {
    randMusic()
}

onMounted(() => {
    changeMusic()
})
</script>

<template>
    <div class="music">
        <div class="post">
            <img :src="music.picurl" alt="img" @click="changeMusic()" />
        </div>
        <h2>{{ music.artistsname }} - {{ music.name }}</h2>
    </div>
    <div v-show="false" class="comment">
        <div class="info">
            <img :src="music.avatarurl" alt="img" />
            <span>{{ music.nickname }}</span>
        </div>
        <div class="content">
            <span>{{ music.content }}</span>
        </div>
    </div>
</template>

<style scoped>
.post {
    display: flex;
    justify-content: center;
    align-items: center;
}

.music h2 {
    padding: 30px;
    text-align: center;
}

.post img {
    width: 30%;
}

.comment {
    width: 90%;
    height: 200px;
    margin: 20px 100px;
}

.comment .info {
    width: 150px;
    height: 150px;
    margin-left: 150px;
    position: absolute;
}

.comment .info img {
    width: 150px;
}

.comment .info span {
    font-size: 20px;
    overflow: auto;
}

.comment .content {
    font-size: 20px;
    position: relative;
    margin: 0 400px;
    text-indent: 2em;
}
</style>
