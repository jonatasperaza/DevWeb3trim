<script setup>
import router from '@/router';
import { ref, onMounted } from 'vue'
import { useMoviesStore } from '@/stores/movie/movie'

const id = router.currentRoute.value?.params?.id
console.log(id)


const moviesStore = useMoviesStore()

const movie = ref(null)

onMounted(async () => {
  movie.value = await moviesStore.getMovie(id)
})
console.log(movie.value)
</script>
<template>
    <main>
        <section>
        <h1>{{ movie?.title }}</h1>
        <img :src="`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`" :alt="movie?.title" />
        <div class="sinopsis">
            <p>{{ movie?.synopsis }}</p>
        </div>
        </section>
    </main>

</template>