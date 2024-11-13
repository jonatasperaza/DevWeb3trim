import api from '../../plugin/index.js'

class animesService {
  async getAnimes() {
    try {
      const response = await api.get('top/anime')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getAnime(id) {
    try {
      const response = await api.get(`anime/${id}/full`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getAnimeEpisodes(id) {
    try {
      const response = await api.get(`anime/${id}/episodes`)
      return response.data
    } catch (error) { 
      console.log(error)
    }
  }

  async searchAnimes(query) {
    try {
      console.log(query)
      const response = await api.get(`anime?q=${query.text}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new animesService()