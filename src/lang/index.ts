import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN.ts'
import EN from './locales/en.ts'
const i18n = createI18n({
  allowComposition: true,
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en': EN
  }
})
export default i18n
