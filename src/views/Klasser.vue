<template>
  <div class="klasser">
    <div class="page-hero">
      <div class="container">
        <div class="label">Våre klasser</div>
        <h1>Vi tilbyr opplæring i følgende klasser</h1>
        <p>Fra personbil til tilhenger – finn klassen som passer deg og kom i gang i dag.</p>
      </div>
    </div>

    <section class="content-section">
      <div class="container">
        <div v-if="loading" class="loading">Laster klasser...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else class="klasser-grid">
          <div v-for="klasse in klasser" :key="klasse.id" class="klasse-card">
            <img 
              :src="getImageUrl(klasse.bilde)" 
              :alt="klasse.navn"
              class="klasse-img"
            />
            <div class="klasse-info">
              <h3>{{ klasse.navn }}</h3>
              <p v-if="klasse.beskrivelse">{{ klasse.beskrivelse }}</p>
              <p v-if="klasse.varighet" class="varighet">⏱️ {{ klasse.varighet }}</p>
              <p v-if="klasse.pris" class="pris">💰 {{ klasse.pris }} kr</p>
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
  name: 'Klasser',
  data() {
    return {
      klasser: [],
      loading: true,
      error: null
    }
  },
  async mounted() {
    await this.loadKlasser()
  },
  methods: {
    async loadKlasser() {
      try {
        this.loading = true
        this.error = null
        this.klasser = await api.getItems('klasser', { sort: 'navn' })
      } catch (err) {
        console.error('Error loading klasser:', err)
        this.error = 'Kunne ikke laste klasser. Sjekk at Directus kjører.'
      } finally {
        this.loading = false
      }
    },
    getImageUrl(fileId) {
      return api.getImageUrl(fileId, { width: 400, height: 250, fit: 'cover' })
    }
  }
}
</script>
