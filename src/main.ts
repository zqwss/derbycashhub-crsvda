import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/lang'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
