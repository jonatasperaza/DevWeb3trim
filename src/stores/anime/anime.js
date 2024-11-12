import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import animeService from '@/service'
import router from '@/router'
import { reactive, ref } from 'vue'

const anime = animeService()

export const useAnimesStore = defineStore('animes', () => {
  const state = reactive({
    animes: [],
    currentAnime: null,
  })


  const isLoading = ref(false)

  const getTopAnimes = async () => {
    isLoading.value = true
    try{
      const response = await anime.getAnimes()
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
    getTopAnimes
  }
})
