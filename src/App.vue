<template>
    <div class="navigate">
        <RouterLink to="/ajax" active-class="active">Ajax</RouterLink>
        <RouterLink to="/axios" active-class="active">Axios</RouterLink>
        <RouterLink to="/fetch" active-class="active">Fetch</RouterLink>
    </div>
    <div class="content">
        <RouterView />
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}

.navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
}

.navigate a.active {
    background-color: #64967e;
    color: #ffc268;
}

.content {
    margin: 30px auto 0;
    width: 90%;
    height: 400px;
}
</style>
