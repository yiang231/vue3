import { customRef } from 'vue'

/**
 * 封装钩子函数
 * @param init 默认数据
 * @param delay 延迟时间
 */
export default function (init: string, delay: number) {
    let timer: number
    const msg = customRef((track, trigger) => {
        return {
            get() {
                // 被读取时调用
                console.log('get')
                // 持续关注 init 的变化
                track()
                return init
            },
            set(value) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    // 被修改时调用
                    console.log('set', value)
                    init = value
                    // 告知 init 数据变化
                    trigger()
                }, delay)
            }
        }
    })
    return { msg }
}
