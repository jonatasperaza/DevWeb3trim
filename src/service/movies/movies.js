
import api from '@/plugin/index.js'

class moviesService {
  async getMovies(page = 1) {
    try {
      const response = await api.get(
        `discover/movie?language=pt-BR&page=${page}&with_genres=16`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  async getMovie(id){
    try{
      const response = await api.get(`movie/${id}?language=pt-BR`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      })
      return response.data
    }
    catch(error){
      console.log(error)
    }
  }
  async getRecommendations(id){
    try{
      const response = await api.get(`movie/${id}/recommendations?language=pt-BR`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      })
      return response.data
    }
    catch(error){
      console.log(error)
    }
  }
}

export default new moviesService()