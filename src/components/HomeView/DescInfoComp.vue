<script setup>
import PlayCircle from "vue-material-design-icons/PlayCircle.vue";
import BookMark from "vue-material-design-icons/BookMark.vue";
import router from "@/router";

// Propriedade recebida
defineProps({
  movie: Object,
});

// Função para truncar a descrição
const truncateOverview = (overview, maxWords = 100) => {
  if (!overview) return '';
  const words = overview.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return overview;
};
</script>
<template>
    <section>
      <div class="container">
        <div class="tag">
          Movie
        </div>
        <h2>{{ movie.title }}</h2>
        <div class="date">{{ movie.release_date }}</div>
        <div class="desc">{{ truncateOverview(movie.overview) }}</div>
        <div class="buttons">
          <button class="green" @click="router.push(`/movie/${movie.id}`)">
            <PlayCircle />
            Watch Trailer
          </button>
          <button class="trans">
            <BookMark />
            Add Watchlist
          </button>
        </div>
      </div>
    </section>
  </template>
  
<style scoped>
section {
    width: 80%;
    margin: auto;
    margin-top: 20vw;
    z-index: 10;
}

.container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.tag {
    background-color: #070707;
    padding: 5px 10px;
    border-radius: 20px;
    display: inline-block;
    margin-bottom: 10px;
    color: white;
    font-size: 10pt;
}

h2{
    font-size: 30pt;
}

.date{
    color: #a1a1a1;
    margin-bottom: 10px;
    font-size: 10pt;
}

.desc {
    display: flex;
    align-items: start;
    font-size: 11pt;
    text-align: left;
}

.buttons{
    display: flex;
    align-items: center;
    margin-top: 20px;
}

button{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
}

.green{
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
}

.green:hover{
    background-color: #409444;
}

.trans{
    background-color: transparent;
    color: #c1c1c1;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    border: 1px solid #c1c1c1;
    transition: 0.5s ease-in-out;
}

.trans:hover{
    background-color: #c1c1c1;
    color: black;
}


</style>