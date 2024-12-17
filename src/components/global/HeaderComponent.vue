<template>
    <header>
        <div class="container">
            <!-- Logo à esquerda -->
            <div class="logo">
                <img src="../../../public/logo.png" class="logo-img" alt="Logo">
                <h1>ABORGUEFLIX</h1>
            </div>
            <!-- Navegação à direita -->
            <nav class="nav">
                <router-link to="/">Home</router-link>
                <router-link to="/">Discover</router-link>
                <router-link to="/">Forum</router-link>
                <router-link to="/">About</router-link>
                <div class="login">
                    <!-- Botões de login -->
                    <button class="green">Login</button>
                    <button class="transparent">Sign In</button>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    color: white;
    background-color: transparent;
    padding: 0 2rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
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

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-img {
    width: 50px;
    height: auto;
}

.nav {
    display: flex;
    align-items: center;
    gap: 20px;
}

.nav a {
    text-decoration: none;
    color: #c1c1c1;
    font-size: 1rem;
}

.nav a:hover {
    color: white;
}

.login {
    display: flex;
    gap: 10px;
    align-items: center;
}

button {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 0.9rem;
    transition: 0.3s ease-in-out;
}

.green {
    background-color: #4CAF50;
    color: white;
    border: none;
}

.green:hover {
    background-color: #409444;
}

.transparent {
    background-color: transparent;
    color: #c1c1c1;
    border: 1px solid #c1c1c1;
}

.transparent:hover {
    background-color: #c1c1c1;
    color: black;
}
</style>