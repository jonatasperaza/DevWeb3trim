<script setup>
import { onMounted, ref, watch } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import { useMoviesStore } from '@/stores/movie/movie';

const props = defineProps({
  content: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
});
const myCarousel = ref(null);
const movieIndex = ref(0);
const moviesPhotos = ref([]);
const moviesStore = useMoviesStore();
const currentMovie = ref({});

const truncateOverview = (overview, maxWords = 100) => {
  if (!overview) return '';
  const words = overview.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return overview;
};

onMounted(() => {
  currentMovie.value = {
    ...props.content[movieIndex.value],
    truncatedOverview: truncateOverview(props.content[movieIndex.value]?.overview),
  };
  moviesPhotos.value = moviesStore.state.moviesPhotos || [];
  watch(myCarousel.value.data.currentSlide, (slide) => {
    movieIndex.value = slide;
    currentMovie.value = {
      ...props.content[movieIndex.value],
      truncatedOverview: truncateOverview(props.content[movieIndex.value]?.overview),
    };
  });
});

const config = {
  itemsToShow: 1,
  snapAlign: 'center',
  transition: 500,
};
</script>

<template>
  <section class="container">
    <!-- Informações de Destaque -->
    <div class="featuredInfo">
      <h2>Featured in AborgueFlix</h2>
      <p>#1 in Australia</p>
      <h1>{{ currentMovie?.title }}</h1>
      <p class="rating">
        ⭐ {{ currentMovie?.vote_average?.toFixed(2)}} |
        2h40m · 2022 · Superhero · Actions
      </p>
      <p class="description">
  {{ currentMovie?.truncatedOverview }}
</p>
      <div class="buttons">
        <button class="btnPlay">▶ Play Now</button>
        <button class="btnWatchlist">⭐ Add Watchlist</button>
      </div>
    </div>

    <!-- Carrossel com Imagens -->
    <div class="carouselWrapper">
      <Carousel v-bind="config" ref="myCarousel">
        <Slide v-for="(slide, index) in moviesPhotos" :key="index" :index="index">
          <img
            :src="slide?.backdrop_path 
              ? `https://image.tmdb.org/t/p/original/${slide.backdrop_path}` 
              : 'placeholder-image-url.jpg'"
            alt="Movie"
            class="carouselImage"
          />
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>


<style scoped>
.container {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 20px;
  width: 100%;
  height: 35vw;
  padding: 2rem;
  background-color: #121212;
  color: white;
  align-items: start;
}

/* Informações de Destaque */
.featuredInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.featuredInfo h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #8e8e8e;
}

.featuredInfo h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.rating {
  font-size: 1rem;
  color: #f3f3f3;
}

.description {
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.4;
}

.buttons {
  display: flex;
  gap: 10px;
}

button {
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btnPlay {
  background-color: #00b04d;
  color: white;
}

.btnPlay:hover {
  background-color: #008c3e;
}

.btnWatchlist {
  background-color: transparent;
  color: #ddd;
  border: 1px solid #555;
}

.btnWatchlist:hover {
  border-color: #ddd;
  color: white;
}

/* Carrossel */
.carouselWrapper {
  position: relative;
  height: 60%;
  top: 0;
  margin-top: -5%;
}

.carouselImage {
  width: 100%;
  height: 90%;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  top: 0;
}
</style>
