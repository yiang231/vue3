import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    // 存储动作函数，用于响应组件中的动作
    actions: {
        increment(value: number) {
            if (this.sum < 100) {
                this.sum += value
            }
        }
    },
    // 存储数据的地方
    state() {
        return {
            sum: 1,
            school: 'atguigu',
            address: 'earth'
        }
    }
})
