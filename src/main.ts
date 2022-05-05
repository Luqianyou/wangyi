import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import gIcon from '@/components/icon.vue'

import 'element-plus/dist/index.css'
import 'tailwindcss/tailwind.css'
import './styles/main.sass'
import './styles/icon/iconfont.css'


const pinia = createPinia()


const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(pinia)
app.component('gIcon',gIcon)

app.mount('#app')
