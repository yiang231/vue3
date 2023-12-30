import { defineStore } from 'pinia'

export const useLoveStore = defineStore('love', {
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
