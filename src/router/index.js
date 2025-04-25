// createRouter: 创建路由实例
// createWebHistory: 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Layout/routes/Home/index.vue'
import Category from '@/views/Layout/routes/Category/index.vue'
import SubCategory from '@/views/Layout/routes/SubCategory/index.vue'
import Detail from '@/views/Layout/routes/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
