<script setup>
import { onMounted } from 'vue'
import router from '@/router'
import { useAnimesStore } from '@/stores/movie/movie'
const id = router?.currentRoute?.value?.params?.id
const animesStore = useAnimesStore()

onMounted(async () => {
  await animesStore.getAnime(id)
})
</script>

<template>
  {{ animesStore.state.currentAnime?.data }}
</template>
