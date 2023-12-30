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
            talkList: [
                { id: 'a', title: '今天你有点怪，哪里怪？怪好看的！' },
                { id: 'b', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
                { id: 'c', title: '心里给你留了一块地，我的死心塌地' }
            ]
        }
    }
})
