import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const useLoveStore = defineStore('love', {
    actions: {
        async getTalk() {
            const url = 'https://api.uomg.com/api/rand.qinghua?format=json'
            // 结果解构再解构赋值，加重命名
            const {
                data: { content: title }
            } = await axios.get(url)

            this.talkList.unshift({ id: nanoid(), title })
        }
    },
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
})
