<template>
    <div class="watch">
        <h1>情况一：监视 ref 定义的基本类型数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum()">修改求和</button>
        <hr />
        <h1>情况二：监视 ref 定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changePersonName()">修改名字</button>
        <button @click="changePersonAge()">修改年龄</button>
        <button @click="changePerson()">修改人</button>
        <hr />
        <h1>情况三：监视 reactive 定义的对象类型数据</h1>
        <h2>姓名：{{ person3.name }}</h2>
        <h2>年龄：{{ person3.age }}</h2>
        <button @click="changePersonName3()">修改名字</button>
        <button @click="changePersonAge3()">修改年龄</button>
        <button @click="changePerson3()">修改人</button>
        <hr />
        <h1>情况四：监视 ref或reactive 定义的对象类型数据中的某一个属性</h1>
        <h2>姓名：{{ person4.name }}</h2>
        <h2>年龄：{{ person4.age }}</h2>
        <h2>汽车：{{ person4.car.car1 }}、{{ person4.car.car2 }}</h2>
        <button @click="changePersonName4()">修改名字</button>
        <button @click="changePersonAge4()">修改年龄</button>
        <button @click="changeCar1()">修改第一台车</button>
        <button @click="changeCar2()">修改第二台车</button>
        <button @click="changeCar()">修改车</button>
        <hr />
        <h1>情况五：监视多个数据</h1>
        <h2>姓名：{{ person5.name }}</h2>
        <h2>年龄：{{ person5.age }}</h2>
        <h2>汽车：{{ person5.car.car1 }}、{{ person5.car.car2 }}</h2>
        <button @click="changePersonName5()">修改名字</button>
        <button @click="changePersonAge5()">修改年龄</button>
        <button @click="changeCar51()">修改第一台车</button>
        <button @click="changeCar52()">修改第二台车</button>
        <button @click="changeCar5()">修改车</button>
    </div>
</template>
<script lang="ts">
export default {
    name: 'components_Watch'
}
</script>
<script lang="ts" setup>
import { ref, watch, reactive } from 'vue'

let sum = ref(0)

function changeSum() {
    sum.value += 1
}

const stopWatch1 = watch(sum, (value, oldValue) => {
    console.log('sum changed', value, oldValue)
    if (value >= 5) {
        // 停止监视
        stopWatch1()
    }
})
let person = ref({
    name: '张三',
    age: 12
})

function changePersonName() {
    person.value.name += '@'
}

function changePersonAge() {
    person.value.age += 1
}

function changePerson() {
    person.value = { name: '李四', age: 43 }
}

watch(
    // 被监视的对象
    person,
    // 监视的回调函数
    (value, oldValue) => {
        console.log('person changed', value, oldValue)
    },
    // 配置对象
    {
        // 深度监视，监视属性变化，地址值不变则认为没变化
        deep: true,
        // 页面一刷新就开始监视
        immediate: true
    }
)

let person3 = reactive({
    name: '张三',
    age: 12
})

function changePersonName3() {
    person3.name += '@'
}

function changePersonAge3() {
    person3.age += 1
}

function changePerson3() {
    // 地址值不变
    Object.assign(person3, { name: '李四', age: 43 })
}

// 监视 reactive 定义的对象类型数据时，默认开启深度监视 deep: true，且监视不可关闭
watch(person3, (value, oldValue) => {
    console.log('person3 changed', value, oldValue)
})

let person4 = reactive({
    name: '张三',
    age: 18,
    car: {
        car1: '奔驰',
        car2: '宝马'
    }
})

function changePersonName4() {
    person4.name += '$'
}

function changePersonAge4() {
    person4.age += 1
}

function changeCar1() {
    person4.car.car1 = '奥迪'
}

function changeCar2() {
    person4.car.car2 = '大众'
}

function changeCar() {
    person4.car = { car1: 'Phoenix', car2: 'Giant' }
}

watch(
    // 要监视的属性是基本类型时，必须写成 getter 函数的形式
    () => {
        return person4.name
    },
    (value, oldValue) => {
        console.log('person4 changed', value, oldValue)
    }
)

watch(
    // 要监视的属性是对象类型时，可以直接写属性，此时对于属性整体的改变无法监视到
    // 建议写成 getter 函数的形式，此时对于对象里的单一属性变化无法监视到，需要手动开启深度监视
    () => {
        return person4.car
    },
    (value, oldValue) => {
        console.log('person4 changed', value, oldValue)
    },
    { deep: true }
)

let person5 = reactive({
    name: '张三',
    age: 18,
    car: {
        car1: '奔驰',
        car2: '宝马'
    }
})

function changePersonName5() {
    person5.name += '$'
}

function changePersonAge5() {
    person5.age += 1
}

function changeCar51() {
    person5.car.car1 = '奥迪'
}

function changeCar52() {
    person5.car.car2 = '大众'
}

function changeCar5() {
    person5.car = { car1: 'Phoenix', car2: 'Giant' }
}

watch([() => person5.name, () => person5.car.car1, () => person5.car], (value, oldValue) => {
    console.log('person5 changed', value, oldValue)
})
</script>
<style scoped>
.watch {
    background-color: magenta;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
