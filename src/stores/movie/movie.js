import { defineStore } from 'pinia'
import moviesService from '@/service'
import { reactive, ref } from 'vue'

export const useMoviesStore = defineStore('movies', () => {
  const state = reactive({
    movies: [],
    Episodes: [],
    currentMovie: null,
    currentEpisodes: [],
  })


  const isLoading = ref(false)

  const getTopMovies = async () => {
    isLoading.value = true
    try{
      const response = await moviesService.moviesService.getMovies()
      state.movies = response
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
    getTopMovies,
  }
})
