import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/register.vue';
import login from '../views/login.vue';

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
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


