<script setup>
import { ref } from 'vue';
import HeaderComponent from '../global/HeaderComponent.vue';
import DescComp from './DescComp.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useMoviesStore } from '@/stores/movie/movie';	


const moviesStore = useMoviesStore()

const config = {
    autoplay: 6000,
    pauseAutoplayOnHover: true,
};

const fotos = ref([
    "https://wallpapercave.com/wp/UcVKlhM.jpg",
    "https://img.elo7.com.br/product/zoom/23CFAEC/banner-painel-incriveis-3x2m-festa.jpg",
    "https://th.bing.com/th/id/R.decc1d964f6679bf1c578c1f5561a054?rik=czs5QCPK2koFWA&pid=ImgRaw&r=0",
    "https://www.ocamundongo.com.br/wp-content/uploads/2015/06/thumb14.png",
    "https://wallpapercave.com/wp/wp1869566.jpg",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7116738B9622AD456A0CAC55BFA0048B747C6FDDAE620D29C4A2AEA4D4D27BC/scale?width=1200&aspectRatio=1.78&format=jpeg",
])


</script>

<template>

    <HeaderComponent />
    <Carousel v-bind="config">
        {{ moviesStore.state?.movies }}
        <Slide v-for="slide in moviesStore.state.moviesPhotos" :key="slide">
            <div class="carousel__item">
                <div class="allItem" :style="{backgroundImage: `url('https://image.tmdb.org/t/p/original/${slide?.backdrop_path}')`}">
                    <DescComp :movie="slide" />
                </div>
            </div> 
        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<style scoped>
.carousel__item {
    height: 50vw;
    width: 100%;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}


.allItem {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    position: relative;
    object-fit: cover;
}

.allItem::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: linear-gradient(to top, #131316, rgba(19, 19, 22, 0));
    z-index: 1;
}

.carousel__pagination {
    list-style: none !important;
}

.carousel__pagination-item {
    margin-top: 0 !important;
}

.carousel__slide {
    margin-top: 0 !important;
}
</style>
