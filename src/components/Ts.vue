<template>
    <div class="ts">
        <!--        <h2>{{ a }}</h2>-->
        <!--        <h2>{{ b }}</h2>-->
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.id }}.{{ item.name }}.{{ item.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'components_Ts'
}
</script>
<script lang="ts" setup>
import { type PersonInter, type Persons } from '@/types'
import { withDefaults } from 'vue'

let person: PersonInter = { id: 'zhangSan', name: 'zs', age: 32 }

let personList1: Array<PersonInter> = [
    { id: 'd', name: 'd', age: 4 },
    { id: 'e', name: 'e', age: 5 }
]
let personList2: Persons = [
    { id: 'd', name: 'd', age: 4 },
    { id: 'e', name: 'e', age: 5 }
]
// 接收赋值、限制类型、限制必要性、指定默认值
withDefaults(
    defineProps<{ list?: Persons }>(),
    // list 没有传值时的默认值
    {
        list: () => [{ id: 'g', name: 'g', age: 4 }]
    }
)
// let x = defineProps(['a', 'b'])
// console.log(x.b)
</script>
<style scoped>
.ts {
    background-color: darkkhaki;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>
