<script setup>
import { useMoviesStore } from '@/stores/movie/movie'
import { onMounted } from 'vue'

const moviesStore = useMoviesStore()

onMounted(async () => {
  await moviesStore.getTopMovies()
})
</script>

<template>
  <main>
    <section>
      <h1>Top Movies</h1>
      <ul>
        <li v-for="movie in moviesStore.state.movies.results" :key="movie">
          <h2 class="tittle">
            {{
              movie.title.split('').length >= 20 ? movie.title.slice(0, 17) + '...' : movie.title
            }}
          </h2>
          <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" :alt="movie.title" />
          <div class="sinopsis">
            <p>{{ movie.synopsis }}</p>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
main {
  padding: 1rem;
}

section {
  display: grid;
  gap: 1rem;
}

ul {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

ul,
li {
  list-style: none;
}

.sinopsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.tittle {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
