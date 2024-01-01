<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>具名插槽</h4>
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
        <hr />
        <h4>（具名）作用域插槽</h4>
        <!--压岁钱案例-->
        <div class="content">
            <Game>
                <template v-slot:default="{ games }">
                    <ul>
                        <li v-for="game in games" :key="game.id">{{ game.name }}</li>
                    </ul>
                </template>
            </Game>
            <Game>
                <template v-slot:default="{ games, x }">
                    <ol>
                        <li v-for="game in games" :key="game.id">{{ game.name }}</li>
                        <li>{{ x }}</li>
                    </ol>
                </template>
            </Game>
            <Game>
                <template #default="{ games, y }">
                    <h3 v-for="game in games" :key="game.id">{{ game.name }}</h3>
                    <h3>{{ y }}</h3>
                </template>
            </Game>
        </div>
    </div>
</template>

<script setup lang="ts">
import Category from './SlotCategory.vue'
import Game from './SlotGame.vue'
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

h2,
h4 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
</style>
