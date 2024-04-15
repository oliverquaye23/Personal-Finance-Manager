import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/register.vue';
import login from '../views/login.vue';
import Landingpage from '@/views/landingpage.vue';

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Landingpage
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })


