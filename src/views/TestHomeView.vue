<script setup>
import { onMounted, ref } from 'vue'
import { useMoviesStore } from '@/stores/movie/movie';
import HeroComp from '@/components/HomeView/HeroComp.vue'
import StreamingComp from '@/components/HomeView/StreamingComp.vue'
import JustMovies from '@/components/HomeView/JustMovies.vue';
// import BigCarousel from '@/components/HomeView/BigCarousel.vue';

const moviesStore = useMoviesStore()


onMounted(async () => {
        await moviesStore.getTopMovies()
})

</script>

<template>
        <HeroComp />
        <StreamingComp />
        <JustMovies />
        <!-- <BigCarousel /> -->
</template>

<style scoped></style>