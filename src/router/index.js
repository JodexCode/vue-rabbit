// createRouter: 创建路由实例
// createWebHistory: 创建history模式的路由
import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Layout/routes/Home/index.vue'
import Category from '@/views/Layout/routes/Category/index.vue'
import SubCategory from '@/views/Layout/routes/SubCategory/index.vue'
import Detail from '@/views/Layout/routes/Detail/index.vue'
import CartList from '@/views/Layout/routes/CartList/index.vue'
import Checkout from '@/views/Layout/routes/Checkout/index.vue'
import Pay from '@/views/Layout/routes/Pay/index.vue'
import PayBack from '@/views/Layout/routes/Pay/PayBack.vue'
import Member from '@/views/Layout/routes/Member/index.vue'
import UserInfo from '@/views/Layout/routes/Member/routes/UserInfo.vue'
import UserOrder from '@/views/Layout/routes/Member/routes/UserOrder.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'Category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'SubCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: Detail
        },
        {
          path: 'cartlist',
          name: 'CartList',
          component: CartList
        },
        {
          path: 'checkout',
          name: 'Checkout',
          component: Checkout
        },
        {
          path: 'pay',
          name: 'Pay',
          component: Pay
        },
        {
          path: 'paycallback',
          name: 'PayBack',
          component: PayBack
        },
        {
          path: 'member',
          name: 'Member',
          component: Member,
          redirect: '/member/user',
          children: [
            {
              path: 'user',
              name: 'UserInfo',
              component: UserInfo
            },
            {
              path: 'order',
              name: 'UserOrder',
              component: UserOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
