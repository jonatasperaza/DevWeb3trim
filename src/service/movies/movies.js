
import api from '../../plugin/index.js'

class moviesService {
  async getMovies() {
    try {
      const response = await api.get('discover/movie', {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new moviesService()