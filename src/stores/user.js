import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginAPI } from '@/apis/user.js'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo = async ({ account, password }) => {
    const res = await LoginAPI({ account, password })
    userInfo.value = res.result
  }
  return { userInfo, getUserInfo }
})
