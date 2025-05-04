// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const httpInstance = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000
})

// 拦截器

// 添加请求拦截器
httpInstance.interceptors.request.use(
  // 在发送请求之前做些什么
  (config) => config,
  // 对请求错误做些什么
  (err) => Promise.reject(err)
)

// 添加响应拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    ElMessage({
      type: 'warning',
      message: err.response.data.message || '网络异常'
    })
    return Promise.reject(err)
  }
)

export default httpInstance
