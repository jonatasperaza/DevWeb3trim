<!-- <script setup>
import { onMounted, ref } from 'vue';
import { useAnimesStore } from '@/stores/anime/anime';

const animesStore = useAnimesStore();

onMounted(async () => {
    await animesStore.getTopAnimes();
});

const search = ref('')
const animes = ref([...animesStore.state.animes])

async function searchAnime(text) {
    await animesStore.searchAnimes({text: text});
    animes.value = animesStore.state.animes;
}
console.log(animes.value)
</script>
<template>
    <input type="text" v-model="search" @input="searchAnime(search)">
    <img :src="animes.data[0].images.webp.large_image_url" v-if="animes.data" alt="">
</template> -->

<script setup>
import { onMounted, ref } from 'vue';
import { useAnimesStore } from '@/stores/anime/anime';

const animesStore = useAnimesStore();

onMounted(async () => {
    await animesStore.getTopAnimes();
});

</script>

<template>
    <main>
        <ul>
            {{ animes }}
            <li v-for="anime in animesStore.state.animes.data" :key="anime.mal_id">
                <img :src="anime.images.webp.large_image_url" alt="">
                <p>{{ anime.title }}</p>
                <RouterLink :to="`/anime/${anime.mal_id}/episodes`">Ver más</RouterLink>
            </li>
        </ul>
    </main>

</template>