<script setup>
import { onMounted } from 'vue';
import router from '@/router';
import { useAnimesStore } from '@/stores/anime/anime';
const id = router?.currentRoute?.value?.params?.id;
const animesStore = useAnimesStore();

onMounted(async () => {
    await animesStore.getAnimeEpisodes(id);
});

</script>
 
<template>
    {{ id }}
    <video :src="animesStore.state.currentEpisodes?.data[0]?.url" v-if="animesStore.state.currentEpisodes"></video>
    {{ animesStore.state.currentEpisodes?.data[0] }} 
</template>