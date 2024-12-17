<script setup>
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useMoviesStore } from '@/stores/movie/movie';
import PlayCircle from "vue-material-design-icons/PlayCircle.vue";

const moviesStore = useMoviesStore();
const props = defineProps({
    content: Array,
    title: String,
});

const config = {
    itemsToShow: 1,
    snapAlign: 'center',
    breakpointMode: 'carousel',
    pauseAutoplayOnHover: true,

    breakpoints: {
        300: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        400: {
            itemsToShow: 2,
            snapAlign: 'start',
        },
        500: {
            itemsToShow: 5,
            snapAlign: 'start',
        },
    },
};

</script>

<template>
    <div style="resize: horizontal; overflow: auto; margin: 5rem 0;" v-if="moviesStore.state.movies">
        <div class="align">
            <h2>{{ props.title }}</h2>
            <hr>
        </div>
        <Carousel v-bind="config">
            <Slide v-for="slide in props.content[0]" :key="slide">
                <div class="allItens" v-if="!slide.adult">
                    <div class="carousel__item"
                        :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${slide?.backdrop_path})` }">
                        <div class="infos">
                            <h3>{{ slide?.title }}</h3>
                            <p>⭐ {{ slide.vote_average }} - {{ slide.release_date }}</p>
                            <router-link class="green" :to="`/movie/${slide.id}`">
                                <PlayCircle />
                                Assistir
                            </router-link>
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
    background-position: center;
    object-fit: cover;
}

.align {
    width: 95%;
    margin: 10px auto;
    color: white;
}

.infos {
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;
    width: 100%;


}

a {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
}

span {
    display: flex;
    align-items: center;
    justify-content: center;
}

.green {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
}

.green:hover {
    background-color: #409444;
}

.trans {
    background-color: transparent;
    color: #c1c1c1;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    border: 1px solid #c1c1c1;
    transition: 0.5s ease-in-out;
}

.trans:hover {
    background-color: #c1c1c1;
    color: black;
}
</style>