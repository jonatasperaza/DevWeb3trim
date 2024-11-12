<script setup>
import { useAnimesStore } from '@/stores/anime/anime'
import { onMounted } from 'vue'

const animesStore = useAnimesStore()

onMounted(async () => {
  await animesStore.getTopAnimes()
})
</script>

<template>
  <main>
    <section>
      <h1>Top Animes</h1>
      <ul>
        <li v-for="anime in animesStore.state.animes.data" :key="anime.mal_id">
          <h2 class="tittle">{{ anime.title.split("").length >= 20 ? anime.title.slice(0, 17) + "..." : anime.title }}</h2>
          <img :src="anime?.images?.webp?.image_url" :alt="anime.title" />
          <div class="sinopsis">
              <p>{{ anime.synopsis }}</p>
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

.sinopsis{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
}

.tittle{
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
