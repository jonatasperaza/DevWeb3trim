<script setup>
import Instagram from "vue-material-design-icons/Instagram.vue";
import Facebook from "vue-material-design-icons/Facebook.vue";
import Twitter from "vue-material-design-icons/Twitter.vue";
import Youtube from "vue-material-design-icons/Youtube.vue";
</script>

<template>
    <footer>

        <div class="container">
            <div class="text">
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod alias quisquam quam inventore quidem
                    consequatur adipisci ipsam
                </h2>
                <div style="display: flex; gap: 1rem;">
                    <router-link to="/about" class="pText">About</router-link>
                    <router-link to="/contact" class="pText">Contact</router-link>
                    <router-link to="/login" class="pText">Login</router-link>
                </div>
            </div>
            <div class="social">
                <div class="links">
                    <router-link to="/">Link</router-link>
                    /
                    <router-link to="/">Link</router-link>
                    /
                    <router-link to="/">Link</router-link>
                    /
                    <router-link to="/">Link</router-link>
                </div>
                <div style="display: flex; gap: 1rem; flex-direction: column;">
                    <div class="icons">
                        <router-link to="/">
                            <Instagram style="color: #fff;" />
                        </router-link>
                        <router-link to="/">
                            <Facebook style="color: #fff;" />
                        </router-link>
                        <router-link to="/">
                            <Twitter style="color: #fff;" />
                        </router-link>
                        <router-link to="/">
                            <Youtube style="color: #fff;" />
                        </router-link>
                    </div>
                    <div class="copyText">
                        <p>&copy; 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: 220px;
    border-top: 1px solid #c1c1c15b;
    padding-top: 1rem;
}

.container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    height: 100%;
}

.text {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    height: 100%;
}

.text h2 {
    font-size: 22px;
    color: white;
}

a.pText {
    color: #c1c1c1;
    font-size: 11pt;
    text-decoration: none;
    border-bottom: 1px solid #c1c1c1;
    text-align: end;
}

.copyText {
    color: #c1c1c1;
    font-size: 11pt;
    text-decoration: none;
    text-align: end;
}

.social {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    height: 100%;
}

.links {
    display: flex;
    gap: 20px;
    color: #fff;
}

.links a {
    color: #fff;
    text-decoration: none;
}

.icons {
    display: flex;
    gap: 20px;
    align-items: end;
    justify-content: end;
    border-bottom: 1px solid #c1c1c1;
    padding-bottom: 10px;
}
</style>