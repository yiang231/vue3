<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <Category title="热门游戏列表">
                <ul>
                    <li v-for="game in games" :key="game.id">{{ game.name }}</li>
                </ul>
            </Category>
            <Category title="今日美食城市">
                <img :src="imgUrl" alt="" />
            </Category>
            <Category title="今日影视推荐">
                <video :src="videoUrl" controls></video>
            </Category>
        </div>
    </div>
</template>

<script setup lang="ts">
import Category from './SlotCategory.vue'
import { ref, reactive } from 'vue'
import { nanoid } from 'nanoid'

let games = reactive([
    { id: nanoid, name: '英雄联盟' },
    { id: nanoid, name: '王者农药' },
    { id: nanoid, name: '红色警戒' },
    { id: nanoid, name: '斗罗大陆' }
])
let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let videoUrl = ref('https://www.bilibili.com/video/BV1Lu411P7sH')
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}

.content {
    display: flex;
    justify-content: space-evenly;
}

img,
video {
    width: 100%;
}
</style>
