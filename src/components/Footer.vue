<template>
  <footer>
    <div class="footer-inner">
      <div>
        <div class="footer-logo">Ways</div>
        <p class="footer-about">
          Ways Trafikkskole tilbyr kvalitetsopplæring for alle typer kjøretøy på Lillehammer. 
          Vi er stolte av vår høye bestått-prosent og fornøyde elever.
        </p>
      </div>
      <div class="footer-col">
        <h5>Adresse</h5>
        <ul>
          <li>Storgata 12</li>
          <li>2609 Lillehammer</li>
          <li><a href="tel:+4761234567">61 23 45 67</a></li>
          <li><a href="mailto:post@ways.no">post@ways.no</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Kurs</h5>
        <ul>
          <li><router-link to="/klasser">Klasse B</router-link></li>
          <li><router-link to="/klasser">Klasse BE</router-link></li>
          <li><router-link to="/klasser">AM/A1</router-link></li>
          <li><router-link to="/klasser">C / CE</router-link></li>
          <li><router-link to="/priser">Pakker</router-link></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Om oss</h5>
        <ul>
          <li><router-link to="/ansatte">Om Ways</router-link></li>
          <li><router-link to="/ansatte">Instruktører</router-link></li>
          <li><router-link to="/kontakt">Kontakt</router-link></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ currentYear }} Ways Trafikkskole. Alle rettigheter forbeholdt.</span>
      <span>Designet med ❤ på Lillehammer</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
