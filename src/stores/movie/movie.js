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
    actionMovies: [],
    adventureMovies: [],
    comedyMovies: [],
    DocumentaryMovies: [],
    series: [],
    tvshows: [],
  })

  const isLoading = ref(false)

  const getTopMovies = async () => {
    isLoading.value = true
    try {
      for (let i = 1; i <= 3; i++) {
        const response = await moviesService.moviesService.getMovies(i)
        state.movies = [ ...state.movies, ...response.results]
        state.moviesPhotos = [
          ...state.moviesPhotos,
          ...response.results.map((movie) => {
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
          }),
        ]
      }
      //await getMoreMovies()
      //await getSeries()
      //await getTvshows()

    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  const getMoreMovies = async () => {
    const genres = [
      { id: 35, name: 'Comedy' },
      { id: 12, name: 'Adventure' },
      { id: 28, name: 'Action' },
      { id: 99, name: 'Documentary' },
    ]
    try {
      for (let i = 1; i <= genres.length; i++) {
        const response = await moviesService.moviesService.getMovies(i, genres[i - 1].id)
        switch (genres[i - 1].name) {
          case 'Action':
            state.actionMovies = [...state.actionMovies, response.results]
            break

          case 'Adventure':
            state.adventureMovies = [...state.adventureMovies, response.results]
            break

          case 'Comedy':
            state.comedyMovies = [...state.comedyMovies, response.results]
            break

          case 'Documentary':
            state.DocumentaryMovies = [...state.DocumentaryMovies, response.results]
            break
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getMovie = async (id) => {
    isLoading.value = true
    try {
      const response = await moviesService.moviesService.getMovie(id)
      state.currentMovie = response
      return response
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  const getGenres = async () => {
    isLoading.value = true
    try {
      const response = await moviesService.moviesService.getGenres()
      return response
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  async function getSeries() {
    isLoading.value = true
    try {
      for (let i = 1; i <= 5; i++) {
        const response = await moviesService.moviesService.getSeries(i)
        state.series = [...state.series, response.results]
      }
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  async function getTvshows() {
    isLoading.value = true
    try {
      for (let i = 1; i <= 5; i++) {
        const response = await moviesService.moviesService.getTvshows(i)
        state.tvshows = [...state.tvshows, response.results]
      }
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  const getRecomendations = async (id) => {
    isLoading.value = true
    try {
      const response = await moviesService.moviesService.getRecommendations(id)
      return response.results.map((movie) => {
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
          })
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    state,
    isLoading,
    getTopMovies,
    getMovie,
    getGenres,
    getSeries,
    getMoreMovies,
    getTvshows,
    getRecomendations,
  }
})
