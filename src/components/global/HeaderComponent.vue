<script setup>
// import Magnify from "vue-material-design-icons/Magnify.vue";
</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <img src="../../../public/logo.png" class="logo" alt="">
                <h1>ABORGUEFLIX</h1>
            </div>
            <div class="links">
                <router-link to="/">Home</router-link>
                <router-link to="/">Discover</router-link>
                <router-link to="/">Forum</router-link>
                <router-link to="/">About</router-link>
            </div>
            <div class="login">
                <!-- <Magnify /> -->
                <button class="green">Login</button>
                <button class="transparent">Sing In</button>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    color: white;
    padding: .5rem 0;
}

img.logo{
    width: 12%;
}

header::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    z-index: -1;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .7) 40%, transparent);
}

.logo {
    display: flex;
    align-items: center;
}


.container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2 ;
}

.links {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

.login {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

span {
    display: flex;
    align-items: center;
    justify-content: center;
}

a {
    text-decoration: none;
    color: #c1c1c1;
}

button {
    cursor: pointer;
}

.green{
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
}

.green:hover{
    background-color: #409444;
}

.transparent{
    background-color: transparent;
    color: #c1c1c1;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    border: 1px solid #c1c1c1;
    transition: 0.5s ease-in-out;
}

.transparent:hover{
    background-color: #c1c1c1;
    color: black;
}
</style>