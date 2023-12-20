<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script>
export default {
  name: 'components_Person',
  setup() {
    // 数据，弱化了 this
    let name = '张三'
    let age = 12
    // 此时并非响应式数据
    let tel = '123465789'

    // 方法
    function changeName() {
      if (name === 'zhangSan') {
        name = '张三'
      } else {
        name = 'zhangSan'
      }
    }
    function changeAge() {
      age += 1
    }
    function showTel() {
      alert(tel)
    }
    return { name, age, tel, changeName, changeAge, showTel }
    // setup() 也可以返回渲染函数
    // return () => '哈哈'
  }
}
</script>

<style scoped>
.person {
  background-color: cyan;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
</style>
