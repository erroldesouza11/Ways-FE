import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Klasser from '../views/Klasser.vue'
import Priser from '../views/Priser.vue'
import Ansatte from '../views/Ansatte.vue'
import Kontakt from '../views/Kontakt.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/klasser',
    name: 'Klasser',
    component: Klasser
  },
  {
    path: '/priser',
    name: 'Priser',
    component: Priser
  },
  {
    path: '/ansatte',
    name: 'Ansatte',
    component: Ansatte
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
