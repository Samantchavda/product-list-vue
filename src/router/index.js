import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UserView from '../views/UserView.vue'
import ProductView from '../views/ProductView.vue'
import ProductInfoView from '../views/ProductInfoView.vue'
import ServiceView from '../views/ServiceView.vue'
import ContactView from '../views/ContactView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    alias: '/home' 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView,
  },
  {
    path: '/product/:productName',
    name: 'productinfo',
    component: ProductInfoView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView,
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if(to.meta.requiresAuth && !window.user){
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
});
export default router
