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
            itemsToShow: 4,
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
        <div class="align">
            <h2>Just Releases</h2>
        </div>
        <Carousel v-bind="config">
            <Slide v-for="slide in photos" :key="slide">
                <div class="allItens">
                    <div class="carousel__item" :style="{ backgroundImage: `url(${slide})` }">
                        <div class="infos">
                            <h3>Nome Filme</h3>
                            <p>⭐ 4.6, Suspense - Drama</p>
                        </div>
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
.allItens {
    display: flex;
    align-items: center;
    width: 80%;
    height: 100%;
    object-fit: cover;
    padding: 0 1rem;
    color: white;
}

.carousel__item {
    height: 400px;
    width: 100%;
    background-color: #000;
    color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: end;
    color: white;
    background-size: cover;
    padding: .5rem;
}

.align {
    width: 95%;
    margin: 10px auto;
    color: white;
}

.infos{
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;
}
</style>