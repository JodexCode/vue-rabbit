import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

// 引入懒加载指令插件
import { lazyPlugin } from '@/directives'

// 全局组件注册
import { componentPlugin } from '@/components/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
