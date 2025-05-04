// 封装购物车模块
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    // 定义购物车列表数据
    const cartList = ref([])
    // 定义购物车列表的添加方法
    const addCart = (goods) => {
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }
    return {
      cartList,
      addCart
    }
  },
  {
    persist: true
  }
)
