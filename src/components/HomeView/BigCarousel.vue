<script setup>
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useMoviesStore } from '@/stores/movie/movie';

const moviesStore = useMoviesStore();

import net from '@/assets/images/net.png';
import disney from '@/assets/images/disney.png';
import nation from '@/assets/images/natio.png';
import dream from '@/assets/images/dream.png';

const config = {
  autoplay: 6000,
  pauseAutoplayOnHover: true,
};

const photos = ref([
    net,
    disney,
    "https://logospng.org/download/hbo-max/hbo-max-2048.png",
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/10/pixar-logo-freelogovectors.net_.png",
    "https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2000-2012.png",
    nation,
    dream,
])
</script>

<template>
  <section>
    <div class="showInfos">
      <div class="title">
        <h2>Featured in AborgueFlix</h2>
        <p>Best Featured for you today</p>
      </div>
      <div class="desc">
        <div class="tag"></div>
        <h2>Air: Courting A Legend</h2>
        <p>⭐ 4.6 | 2h40m - 2024 - SuperHero</p>
        <p class="descInfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid, necessitatibus architecto officia possimus accusantium modi natus eius dignissimos voluptate tempore assumenda, exercitationem et reiciendis veritatis deserunt ab odio iusto.
        </p>
      </div>
      <div class="buttons">
        <button class="green">
          <span>▶</span>
          Watch Trailer
        </button>
        <button class="trans">
          <span>⭐</span>
          Add Watchlist
        </button>
      </div>
    </div>
    <div class="showCarousel">
      <Carousel v-bind="config">
        <Slide v-for="slide in moviesStore.state.moviesPhotos" :key="slide">
          <div class="carousel__item">
            <div
              class="allItem"
              :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${slide?.backdrop_path}')` }"
            ></div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 60vh;
  display: grid;
  grid-template-columns: 2.5fr 4fr;
  margin-bottom: 4rem;
}

section > div {
  border: 2px solid red;
}

.showInfos {
  padding: 20px;
}

.showCarousel {
  height: 100%;
}

.carousel__item {
  height: 100%; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.allItem {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center; 
  position: relative;
  object-fit: cover;
}

.buttons {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

span {
  display: flex;
  align-items: center;
  justify-content: center;
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
