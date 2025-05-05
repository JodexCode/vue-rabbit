// 封装倒计时逻辑函数

import { computed, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  const time = ref(0)
  let timer = null
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  const start = (currentTime) => {
    time.value = currentTime
    timer = setInterval(() => {
      if (time.value <= 0) {
        clearInterval(timer)
        return
      }
      time.value--
    }, 1000)
  }
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}
