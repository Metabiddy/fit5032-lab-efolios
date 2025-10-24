import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <--- 引入 router
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router) // <--- 使用 router
app.mount('#app')
