<script setup>
import { useFavoritesStore } from '@/stores/';
import PlayCircle from "vue-material-design-icons/PlayCircle.vue";
import Trash from "vue-material-design-icons/TrashCan.vue";

const favoritesStore = useFavoritesStore();

const handleDelete = (movie) => {
  favoritesStore.deleteFavorite(movie);
};
</script>

<template>
  <div v-if="favoritesStore.state.favorites.length > 0" style="margin: 7rem 0;">
    <div class="align">
      <h2>Filmes Favoritos</h2>
      <hr />
    </div>
    <div class="grid-container">
      <div class="allItens" v-for="movie in favoritesStore.state.favorites" :key="movie.id">
        <div class="carousel__item"
          :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` }">
          <div class="infos">
            <h3>{{ movie?.title }}</h3>
            <p>⭐ {{ movie.vote_average }} - {{ movie.release_date }}</p>
            <div class="buttons">
              <router-link class="green" :to="`/movie/${movie.id}`">
                <PlayCircle />
                Assistir
              </router-link>
              <button class="red" @click="handleDelete(movie)">
                <Trash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else style="margin: 13rem 0; text-align: center; color: white;">
    <h2>Você não possui filmes favoritados</h2>
  </div>
</template>

<style scoped>
.grid-container {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
}

.allItens {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.carousel__item {
  width: 250px;
  height: 300px;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-size: cover;
  padding: 0.5rem;
  background-position: center;
  box-sizing: border-box;
}

.infos {
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  width: 100%;
}

.buttons {
    display: grid;
    grid-template-columns: 72% 25%;
    gap: 10px;
}

a {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
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

.red {
  background-color: #FF4D4D;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.red:hover {
  background-color: #E04040;
}

.align {
  width: 75%;
  margin: 10px auto;
  color: white;
}

/* Responsividade */
@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
