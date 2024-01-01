<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <Category>
                <template v-slot:s2>
                    <ul>
                        <li v-for="game in games" :key="game.id">{{ game.name }}</li>
                    </ul>
                </template>
                <template v-slot:s1>
                    <h2>热门游戏列表</h2>
                </template>
            </Category>
            <Category>
                <template v-slot:s2>
                    <img :src="imgUrl" alt="" />
                </template>
                <template v-slot:s1>
                    <h2>今日美食城市</h2>
                </template>
            </Category>
            <Category>
                <template #s2>
                    <video :src="videoUrl" controls />
                </template>
                <template #s1>
                    <h2>今日影视推荐</h2>
                </template>
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

h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
</style>
