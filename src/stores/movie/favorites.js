import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const useFavoritesStore = defineStore('favorites', () => {
  const state = useStorage('movies', {
    favorites: [],
  })

  const addFavorite = (movie) => {
    const exists = state.value.favorites.some((item) => item.id === movie.id)

    if (exists) {
      toast.warn('Este filme já está nos favoritos!', {
        position: 'top-right',
      })
    } else {
      state.value.favorites.push(movie)
      toast.success('Filme adicionado aos favoritos com sucesso!', {
        position: 'top-right',
      })
    }
  }

  const deleteFavorite = (movie) => {
    state.value.favorites = state.value.favorites.filter((item) => item.id !== movie.id)
    toast.info('Filme removido dos favoritos com sucesso!', {
      position: 'top-right',
    })
  }

  return {
    state,
    addFavorite,
    deleteFavorite,
  }
})
