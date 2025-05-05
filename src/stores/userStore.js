import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginAPI } from '@/apis/user.js'
import { useCartStore } from './cartStore.js'
import { mergeCartAPI } from '@/apis/cart.js'
export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()

    const userInfo = ref({})
    const getUserInfo = async ({ account, password }) => {
      const res = await LoginAPI({ account, password })
      userInfo.value = res.result
      // 合并购物车
      mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        })
      )
      cartStore.updateNewList()
    }
    // 清除用户信息
    const clearUserInfo = () => {
      userInfo.value = {}
      // 清除购物车
      cartStore.clearCart()
    }
    return { userInfo, getUserInfo, clearUserInfo }
  },
  {
    persist: true
  }
)
