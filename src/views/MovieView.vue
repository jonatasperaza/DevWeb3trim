<script setup>
import router from '@/router';
import { ref, onMounted, computed, watch } from 'vue';
import { useMoviesStore } from '@/stores/movie/movie';
import HeaderComponent from '@/components/global/HeaderComponent.vue';
import PlayCircle from 'vue-material-design-icons/PlayCircle.vue';
import BookMark from 'vue-material-design-icons/Bookmark.vue';
import Download from 'vue-material-design-icons/Download.vue';
import Share from 'vue-material-design-icons/Share.vue';
import ThumbUp from 'vue-material-design-icons/ThumbUp.vue';
import CarouselSimilarMovies from '@/components/Movies/CarouselSimilarMovies.vue';
import { useFavoritesStore } from '@/stores';

const id = router.currentRoute.value?.params?.id;

watch(() => router.currentRoute.value?.params?.id, () => {
  router.go(0);
});

const moviesStore = useMoviesStore();
const favoritesStore = useFavoritesStore();

const movie = ref(null);

const recomendations = ref([]);

onMounted(async () => {
  movie.value = await moviesStore.getMovie(id);
  recomendations.value = await moviesStore.getRecomendations(id);
  window.scrollTo(0, 0);
});

const subtitle = computed(() => {
  if (!movie.value) return '';
  const releaseYear = new Date(movie.value.release_date).getFullYear();
  const genres = movie.value.genres.map((genre) => genre.name).join(' - ');
  return `${releaseYear} | ${genres}`;                                                       
});
</script>


V<template>
  <HeaderComponent />
  <main>
    <section class="heroMovie"
      :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` }">
      <div class="desc">
        <h1>{{ movie?.title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
        <div class="buttons">
          <div class="left-buttons">
            <button class="green" @click="router.push(`/movie/${movie.id}`)">
              <PlayCircle />
              Watch Trailer
            </button>
            <button class="trans" @click="favoritesStore.addFavorite(movie)">
              <BookMark />
              Add Watchlist
            </button>
          </div>
          
          <div class="right-buttons">
            <button class="trans">
              <Download />
              Download
            </button>
            <button class="trans">
              <Share />
              Share
            </button>
            <button class="trans">
              <ThumbUp />
              Like
            </button>
          </div>
        </div>
      </div>
    </section>
    <h3 style="color: white; padding: 2vh 10vw;">{{ movie?.overview }}</h3>
    <CarouselSimilarMovies :content="recomendations" title="Similar Movies" />
  </main>
</template>

<style scoped>
.heroMovie {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
}

.desc {
  width: 80%;
  margin: auto;
  margin-top: 30vw;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* Ocupa toda a largura */
  margin-top: 20px;
}

.left-buttons,
.right-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
  /* Espaçamento entre os botões */
}

button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.green {
  background-color: #4caf50;
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
  background-color: #070707;
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

.secondary {
  background-color: #f1f1f1;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
}

.secondary:hover {
  background-color: #e0e0e0;
  color: black;
}

h1 {
  font-size: 30pt;
  color: #fff;
}

.subtitle {
  font-size: 10pt;
  color: #c1c1c1;
}
</style>