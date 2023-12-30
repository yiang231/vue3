<template>
    <div class="love">
        <button @click="getLove">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'components_Love'
}
</script>
<script lang="ts" setup>
import { useLoveStore } from '@/store/love'
import '@/components/Love.vue'
import { storeToRefs } from 'pinia'

// const url = 'https://api.uomg.com/api/rand.qinghua?format=json'
// let talkList = reactive([
//     { id: 'a', title: '今天你有点怪，哪里怪？怪好看的！' },
//     { id: 'b', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
//     { id: 'c', title: '心里给你留了一块地，我的死心塌地' }
// ])
const loveStore = useLoveStore()
const { talkList } = storeToRefs(loveStore)
// 订阅【监视】数据
loveStore.$subscribe((mutation, state) => {
    // state 是真实的数据
    console.log(mutation, state)
    // 存在 localStorage 中
    localStorage.setItem('talkList', JSON.stringify(state.talkList))
})
function getLove() {
    loveStore.getTalk()
}
// async function getLove() {
//     // 结果解构再解构赋值，加重命名
//     let {
//         data: { content: title }
//     } = await axios.get(url)
//
//     loveStore.talkList.unshift({ id: nanoid(), title })
// }
</script>

<style scoped>
.love {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

button {
    margin: 0 5px;
    height: 25px;
}
</style>
