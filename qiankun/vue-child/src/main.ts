import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      render(props.container)
    },
    bootstrap() {},
    unmount() {},
    update() {}
  })
}

const render = (container: HTMLElement | undefined) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const appDom = container ? container : '#app'
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount(appDom)
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render(undefined)
