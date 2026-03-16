import axios from 'axios'

// Use environment variable for API URL (Cloudflare Pages compatible)
const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL || 'http://localhost:8055'
const API_URL = `${DIRECTUS_URL}/items`

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const api = {
  // Get all items from a collection
  async getItems(collection, params = {}) {
    try {
      const response = await apiClient.get(`/${collection}`, { params })
      return response.data.data
    } catch (error) {
      console.error(`Error fetching ${collection}:`, error)
      return []
    }
  },

  // Get single item by ID
  async getItem(collection, id) {
    try {
      const response = await apiClient.get(`/${collection}/${id}`)
      return response.data.data
    } catch (error) {
      console.error(`Error fetching ${collection} item:`, error)
      return null
    }
  },

  // Create new item
  async createItem(collection, data) {
    try {
      const response = await apiClient.post(`/${collection}`, data)
      return response.data.data
    } catch (error) {
      console.error(`Error creating ${collection} item:`, error)
      throw error
    }
  },

  // Get image URL
  getImageUrl(fileId, params = {}) {
    if (!fileId) return 'https://via.placeholder.com/400x300?text=No+Image'
    const queryString = new URLSearchParams(params).toString()
    return `${DIRECTUS_URL}/assets/${fileId}${queryString ? '?' + queryString : ''}`
  }
}

export default api
