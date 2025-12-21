import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { defaultLocale, fallbackLocale, languages } from './locales'
import App from './App.vue'
import router from './router'

const messages = Object.assign(languages)

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: fallbackLocale,
    messages,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
