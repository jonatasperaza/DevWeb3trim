<script setup>
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import net from '@/assets/images/net.png';
import disney from '@/assets/images/disney.png';
import nation from '@/assets/images/natio.png';
import dream from '@/assets/images/dream.png';

const config = {
    itemsToShow: 1,
    snapAlign: 'center',
    breakpointMode: 'carousel',
    pauseAutoplayOnHover: true,

    breakpoints: {
        300: {
            itemsToShow: 2,
            snapAlign: 'center',
        },
        400: {
            itemsToShow: 3,
            snapAlign: 'start',
        },
        500: {
            itemsToShow: 5,
            snapAlign: 'start',
        },
    },
};

const photos = ref([
    net,
    disney,
    "https://logospng.org/download/hbo-max/hbo-max-2048.png",
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/10/pixar-logo-freelogovectors.net_.png",
    "https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2000-2012.png",
    nation,
    dream,
])
</script>

<template>
    <div style="resize: horizontal; overflow: auto; margin: 5rem 0;">
        <Carousel v-bind="config">
            <Slide v-for="slide in photos" :key="slide">
                <div class="allItens">
                <div class="carousel__item">
                    <img :src="slide" alt="">
                </div>
            </div>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<style scoped>
.allItens{
    display: flex;
    align-items: center;
    width: 80%;
    height: 100%;
    object-fit: cover;
    padding: 0 1rem;
    color: white;
}

.carousel__item {
    height: 120px;
    width: 100%;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.carousel__item > img {
    width: 80%;
    object-fit: cover;
    border-radius: 8px;
}


</style>\