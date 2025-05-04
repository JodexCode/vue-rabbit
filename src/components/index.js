// 把component 下的所有文件都进行全局注册

import ImageView from './imageView/index.vue'
import XtxSku from './XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}
