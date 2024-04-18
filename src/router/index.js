import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/register.vue';
import login from '../views/login.vue';
import Landingpage from '@/views/landingpage.vue';
import dashboard from '@/views/dashboard.vue';
import expenses from '@/views/expenses.vue'
import budgets from '@/views/budgets.vue'

const routes = [
  {
    path: '/',
    name: 'landing page',
    component: Landingpage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'register',
    component: Register
  },
  {
    path: '/budgets',
    name: 'budgets',
    component: budgets
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: expenses
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


