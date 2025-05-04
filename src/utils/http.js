// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router/index'
const httpInstance = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000
})

// 拦截器

// 添加请求拦截器
httpInstance.interceptors.request.use(
  // 在发送请求之前做些什么
  (config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  // 对请求错误做些什么
  (err) => Promise.reject(err)
)

// 添加响应拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const userStore = useUserStore()

    ElMessage({
      type: 'warning',
      message: err.response.data?.message || '网络异常'
    })
    // 401错误处理
    if (err.response.status === 401) {
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default httpInstance
