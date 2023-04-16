import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Home-page'
import DetailProductPage from '@/pages/Detail-product-page'
import PromoPage from '@/pages/Promo-page'
import BasketPage from '@/pages/Basket-page'

const routes = [{
  path:'/',
  name:'home',
  component: HomePage
},
{
  path:'/detail/:id',
  name:'detail',
  component:DetailProductPage
},
{
  path:'/promo',
  name:'promo',
  component:PromoPage
},
{
  path:'/basket',
  name:'basket',
  component:BasketPage
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
