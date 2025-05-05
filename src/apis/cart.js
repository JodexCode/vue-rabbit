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

// 删除购物车
export function delCartAPI(ids) {
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 合并购物车
export function mergeCartAPI(cartList) {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data: cartList
  })
}
