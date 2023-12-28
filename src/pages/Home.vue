<template>
    <div class="home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="" />
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
    setTimeout(() => {
        // Home to News
        router.push('/news')
    }, 3000)
})
</script>
<script lang="ts">
export default {
    name: 'components_Home'
}
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
