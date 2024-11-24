<script setup>
import { onMounted, ref } from 'vue'
import { useMoviesStore } from '@/stores/movie/movie';
import HeroComp from '@/components/HomeView/HeroComp.vue'
import StreamingComp from '@/components/HomeView/StreamingComp.vue'

const moviesStore = useMoviesStore()


onMounted(async() => {
await moviesStore.getTopMovies()
})

</script>

<template>
        <HeroComp />
        <StreamingComp />
</template>

<style scoped></style>