<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <span class="logo-text">Ways</span>
      </router-link>
      
      <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" :class="{ active: menuOpen }">
        <li><router-link to="/" @click="closeMenu">Hjem</router-link></li>
        <li><router-link to="/ansatte" @click="closeMenu">Ansatte</router-link></li>
        <li><router-link to="/klasser" @click="closeMenu">Klasser</router-link></li>
        <li><router-link to="/priser" @click="closeMenu">Priser</router-link></li>
        <li><router-link to="/kontakt" class="btn-primary" @click="closeMenu">Kontakt</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>
