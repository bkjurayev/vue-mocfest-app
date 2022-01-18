import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('../views/Home')
  },
  {
    path: '/ticketproperties',
    name: 'ticketproperties',    
    props: true,
    meta: {layout: 'main'},
    component: () => import('../views/TicketProperties')
  },
  {
    path: '/chosentichet',
    name: 'chosentichet',
    meta: {layout: 'main'},
    component: () => import('../views/ChosenTicket')
  },
  {
    path: '/tobuytickets',
    name: 'tobuytickets',
    meta: {layout: 'main'},
    component: () => import('../views/ToBuyTickets')
  },
  {
    path: '/gallery',
    name: 'gallery',
    meta: {layout: 'empty'},
    component: () => import('../views/Gallery.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
