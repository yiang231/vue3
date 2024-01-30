<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Music163 } from '@/type/Music163'

let music = ref<Music163>({
    artistsname: '',
    avatarurl: '',
    content: '',
    name: '',
    nickname: '',
    picurl: '',
    url: ''
})

function fetch_post() {
    fetch('https://api.uomg.com/api/comments.163', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            format: 'json', // json / mp3
            mid: '' // 网易云歌单ID
        })
    })
        .then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
        })
        .then((data) => {
            music.value = data.data
        })
}

function changeMusic() {
    fetch_post()
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
    <div class="comment">
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
