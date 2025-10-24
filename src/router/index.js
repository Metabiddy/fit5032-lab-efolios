import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
<<<<<<< HEAD
import GetBookCountView from '../views/GetBookCountView.vue'
import AddBookView from '../views/AddBookView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
=======
>>>>>>> 5767ac824709e7b443b0e01c241e85702b44d4df

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
<<<<<<< HEAD
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/AddBook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/Weather',
    name: 'Weather',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
=======
>>>>>>> 5767ac824709e7b443b0e01c241e85702b44d4df
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router