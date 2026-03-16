<template>
  <div class="kontakt">
    <div class="page-hero">
      <div class="container">
        <div class="label">Kontakt oss</div>
        <h1>Vi hører gjerne fra deg</h1>
        <p>Send oss en melding så tar vi kontakt så snart som mulig.</p>
      </div>
    </div>

    <section class="content-section">
      <div class="container">
        <div class="contact-wrapper">
          <div v-if="successMessage" class="message message-success">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="message message-error">
            {{ errorMessage }}
          </div>

          <form @submit.prevent="submitForm" id="kontakt-form">
            <div class="form-group">
              <label for="navn">Navn *</label>
              <input 
                type="text" 
                id="navn" 
                v-model="formData.navn" 
                required
                :disabled="submitting"
              />
            </div>

            <div class="form-group">
              <label for="epost">E-post *</label>
              <input 
                type="email" 
                id="epost" 
                v-model="formData.epost" 
                required
                :disabled="submitting"
              />
            </div>

            <div class="form-group">
              <label for="telefon">Telefon</label>
              <input 
                type="tel" 
                id="telefon" 
                v-model="formData.telefon"
                :disabled="submitting"
              />
            </div>

            <div class="form-group">
              <label for="melding">Melding *</label>
              <textarea 
                id="melding" 
                v-model="formData.melding" 
                rows="6" 
                required
                :disabled="submitting"
              ></textarea>
            </div>

            <button type="submit" class="btn-primary" :disabled="submitting">
              {{ submitting ? 'Sender...' : 'Send melding' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'Kontakt',
  data() {
    return {
      formData: {
        navn: '',
        epost: '',
        telefon: '',
        melding: ''
      },
      submitting: false,
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async submitForm() {
      this.submitting = true
      this.successMessage = ''
      this.errorMessage = ''

      try {
        await api.createItem('kontakt', {
          ...this.formData,
          dato: new Date().toISOString()
        })

        this.successMessage = 'Takk for din henvendelse! Vi kontakter deg snart.'
        this.resetForm()
      } catch (err) {
        console.error('Error submitting form:', err)
        this.errorMessage = 'Noe gikk galt. Vennligst prøv igjen senere.'
      } finally {
        this.submitting = false
      }
    },
    resetForm() {
      this.formData = {
        navn: '',
        epost: '',
        telefon: '',
        melding: ''
      }
    }
  }
}
</script>
