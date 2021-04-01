import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/Home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import( '../views/About.vue')
      },
      {
        path: '/stats',
        name: 'stats',
        component: () => import( '../views/About.vue')
      },
      {
        path: '/wms',
        name: 'wms',
        component: () => import('../views/About.vue'),
        children: [
          {
            path: 'list',
            name: 'wmslist',
            component: () => import( '../views/About.vue')
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
