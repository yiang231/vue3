// 引入 mitt
import mitt from 'mitt'

// 调用 mitt 得到 emitter，用于绑定事件、触发事件
const emitter = mitt()

// 绑定事件
emitter.on('test1', () => {
    console.log('test1被调用了')
})
emitter.on('test2', () => {
    console.log('test2被调用了')
})

// 持续触发事件
setInterval(() => {
    emitter.emit('test1')
    emitter.emit('test2')
}, 1000)

// 定时解绑事件
setTimeout(() => {
    emitter.off('test1')
    emitter.off('test2')
    // emitter.all.clear()
}, 2000)

// 默认暴露 emitter
export default emitter
