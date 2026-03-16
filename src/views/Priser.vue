<template>
  <div class="priser">
    <div class="page-hero">
      <div class="container">
        <div class="label">Priser og pakker</div>
        <h1>Rimelige priser for hver sjåfør</h1>
        <p>Oversiktlige priser uten skjulte kostnader.</p>
      </div>
    </div>

    <section class="content-section">
      <div class="container">
        <div v-if="loading" class="loading">Laster priser...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else>
          <div v-for="(items, kategori) in groupedPriser" :key="kategori" class="pris-kategori">
            <h3>{{ kategori }}</h3>
            <div class="pris-liste">
              <div v-for="pris in items" :key="pris.id" class="pris-item">
                <div class="pris-info">
                  <h4>{{ pris.beskrivelse }}</h4>
                  <p v-if="pris.detaljer">{{ pris.detaljer }}</p>
                </div>
                <div class="pris-beløp">{{ pris.pris }} kr</div>
              </div>
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
  name: 'Priser',
  data() {
    return {
      priser: [],
      loading: true,
      error: null
    }
  },
  computed: {
    groupedPriser() {
      const grouped = {}
      this.priser.forEach(pris => {
        const kategori = pris.kategori || 'Annet'
        if (!grouped[kategori]) {
          grouped[kategori] = []
        }
        grouped[kategori].push(pris)
      })
      return grouped
    }
  },
  async mounted() {
    await this.loadPriser()
  },
  methods: {
    async loadPriser() {
      try {
        this.loading = true
        this.error = null
        this.priser = await api.getItems('priser', { sort: 'kategori' })
      } catch (err) {
        console.error('Error loading priser:', err)
        this.error = 'Kunne ikke laste priser. Sjekk at Directus kjører.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
