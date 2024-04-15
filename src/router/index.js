import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    
  },
  {
    path: '/about',
    name: 'about',
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
