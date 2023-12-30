import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { reactive } from 'vue'

export const useLoveStore = defineStore('love', () => {
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])

    async function getTalk() {
        const url = 'https://api.uomg.com/api/rand.qinghua?format=json'
        // 结果解构再解构赋值，加重命名
        const {
            data: { content: title }
        } = await axios.get(url)

        talkList.unshift({ id: nanoid(), title })
    }

    return { talkList, getTalk }
})
