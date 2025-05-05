// 封装购物车相关接口

import httpInstance from '@/utils/http'

export function insertCartAPI({ skuId, count }) {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
export function findNewCartListAPI() {
  return httpInstance({
    url: '/member/cart'
  })
}
