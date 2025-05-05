// 封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 定义购物车列表数据
    const cartList = ref([])
    // 定义购物车列表的添加方法
    const addCart = async (goods) => {
      const { skuId, count } = goods
      if (isLogin.value) {
        await insertCartAPI({ skuId, count })
        const res = await findNewCartListAPI()
        cartList.value = res.result
      } else {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          item.count += goods.count
        } else {
          cartList.value.push(goods)
        }
      }
    }

    // 删除购物车
    const delCart = (skuId) => {
      const idx = cartList.value.findIndex((item) => item.skuId === skuId)
      cartList.value.splice(idx, 1)
    }

    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }

    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    // 单选和全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected))
    }
    // 计算选中的数量
    const selectedCount = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0)
    )
    // 计算选中的总价
    const selectedPrice = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0)
    )
    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice
    }
  },
  {
    persist: true
  }
)
