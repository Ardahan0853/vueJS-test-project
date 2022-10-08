import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Users from '../views/Users/Users.vue'
import UserDetails from "../views/Users/UserDetails.vue"
import NotFound from "../views/Users/NotFound.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/users',
    name: 'users',
    component: Users
    
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    props:true
  },
  // redirect
  {
    path: '/all-users',
    redirect: '/users'
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
