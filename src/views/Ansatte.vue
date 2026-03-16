<template>
  <div class="ansatte">
    <div class="page-hero">
      <div class="container">
        <div class="label">Vårt team</div>
        <h1>Møt våre instruktører</h1>
        <p>Erfarne og engasjerte instruktører som hjelper deg hele veien.</p>
      </div>
    </div>

    <section class="content-section">
      <div class="container">
        <div v-if="loading" class="loading">Laster ansatte...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else class="staff-grid">
          <div v-for="person in ansatte" :key="person.id" class="staff-card">
            <img 
              :src="getImageUrl(person.bilde)" 
              :alt="person.navn"
            />
            <h3>{{ person.navn }}</h3>
            <p v-if="person.stilling" class="role">{{ person.stilling }}</p>
            <p v-if="person.bio" class="bio">{{ person.bio }}</p>
            <div class="contact">
              <a v-if="person.telefon" :href="`tel:${person.telefon}`">{{ person.telefon }}</a>
              <br v-if="person.telefon && person.epost">
              <a v-if="person.epost" :href="`mailto:${person.epost}`">{{ person.epost }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'Ansatte',
  data() {
    return {
      ansatte: [],
      loading: true,
      error: null
    }
  },
  async mounted() {
    await this.loadAnsatte()
  },
  methods: {
    async loadAnsatte() {
      try {
        this.loading = true
        this.error = null
        this.ansatte = await api.getItems('ansatte', { sort: 'navn' })
      } catch (err) {
        console.error('Error loading ansatte:', err)
        this.error = 'Kunne ikke laste ansatte. Sjekk at Directus kjører.'
      } finally {
        this.loading = false
      }
    },
    getImageUrl(fileId) {
      return api.getImageUrl(fileId, { width: 300, height: 300, fit: 'cover' })
    }
  }
}
</script>
