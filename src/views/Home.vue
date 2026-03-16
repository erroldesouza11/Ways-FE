<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>Velkommen til Ways Trafikkskole</h1>
        <p>Din vei til førerkortet starter her</p>
        <router-link to="/kontakt" class="btn-primary">Kom i gang</router-link>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2 class="section-title">Hvorfor velge Ways?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Erfarne instruktører</h3>
            <p>Våre instruktører har lang erfaring og høy kompetanse</p>
          </div>
          <div class="feature-card">
            <h3>Moderne biler</h3>
            <p>Vi bruker nye og trygge biler i opplæringen</p>
          </div>
          <div class="feature-card">
            <h3>Høy bestått-prosent</h3>
            <p>Våre elever har svært god bestått-prosent</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
