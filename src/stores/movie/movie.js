import { defineStore } from 'pinia'
import moviesService from '@/service'
import { reactive, ref } from 'vue'

export const useMoviesStore = defineStore('movies', () => {
  const state = reactive({
    movies: [],
    episodes: [],
    moviesPhotos: [],
    currentMovie: null,
    currentEpisodes: [],
  })


  const isLoading = ref(false)

  const getTopMovies = async () => {
    isLoading.value = true
    try{
      for (let i = 1; i <= 5; i++) {
        const response = await moviesService.moviesService.getMovies(i)
        state.movies = [...state.movies, response.results]
        state.moviesPhotos = [...state.moviesPhotos, ...response.results.map(movie => {
          return {
            id: movie.id,
            poster_path: movie.poster_path,
            backdrop_path: movie.backdrop_path,
            title: movie.title,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
            overview: movie.overview,
            release_date: movie.release_date,
          }
        })]
      }
    }
    catch(error){
      console.log(error)
    }
    finally{
      isLoading.value = false
    }
  }

  const getMovie = async (id) => {
    isLoading.value = true
    try{
      const response = await moviesService.moviesService.getMovie(id)
      state.currentMovie = response
      return response
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
    getMovie,
  }
})
