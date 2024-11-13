import { defineStore } from 'pinia'
import animeService from '@/service'
import router from '@/router'
import { reactive, ref } from 'vue'

export const useAnimesStore = defineStore('animes', () => {
  const state = reactive({
    animes: [],
    currentAnime: null,
    currentEpisodes: null
  })


  const isLoading = ref(false)

  const getTopAnimes = async () => {
    isLoading.value = true
    try{
      const response = await animeService.animeService.getAnimes()
      state.animes = response
    }
    catch(error){
      console.log(error)
    }
    finally{
      isLoading.value = false
    }
  }

  const getAnime = async (id) => {
    isLoading.value = true
    try{
      const response = await animeService.animeService.getAnime(id)
      state.currentAnime = response
    }
    catch(error){
      console.log(error)
    }
    finally{
      isLoading.value = false
    }
  }

  const getAnimeEpisodes = async (id) => {
    isLoading.value = true
    try{
      const response = await animeService.animeService.getAnimeEpisodes(id)
      state.currentEpisodes = response
    }
    catch(error){
      console.log(error)
    }
    finally{
      isLoading.value = false
    }
  }

  const searchAnimes = async (query) => {
    isLoading.value = true
    try{
      const response = await animeService.animeService.searchAnimes(query)
      state.animes = response
    }
    catch(error){
      console.log(error)
    }
    finally{
      isLoading.value = false
    }
  }
  return {
    state,
    isLoading,
    getTopAnimes,
    getAnime,
    getAnimeEpisodes,
    searchAnimes
  }
})
