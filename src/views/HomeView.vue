<script setup>
import { onMounted, ref } from 'vue'
import { useMoviesStore } from '@/stores/movie/movie';
import HeroComp from '@/components/HomeView/HeroComp.vue'
import StreamingComp from '@/components/HomeView/StreamingComp.vue'
import JustMovies from '@/components/HomeView/JustMovies.vue';
import GlobalCarousel from '@/components/HomeView/GlobalCarousel.vue';
import BigCarousel from '@/components/HomeView/BigCarousel.vue';

const moviesStore = useMoviesStore()


onMounted(async() => {
await moviesStore.getTopMovies()
})

</script>

<template>
        <HeroComp />
        <StreamingComp />
        <!-- <JustMovies /> -->
        <GlobalCarousel :content="moviesStore.state.comedyMovies" v-if="moviesStore.state.comedyMovies" title="Comedy Movies" />
        <GlobalCarousel :content="moviesStore.state.adventureMovies" v-if="moviesStore.state.adventureMovies" title="Adventure Movies" />
        <GlobalCarousel :content="moviesStore.state.actionMovies" v-if="moviesStore.state.actionMovies" title="Action Movies" />
        <GlobalCarousel :content="moviesStore.state.DocumentaryMovies" v-if="moviesStore.state.DocumentaryMovies" title="Documentary Movies" />
        <BigCarousel />

</template>

<style scoped></style>