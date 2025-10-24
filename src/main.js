<<<<<<< HEAD
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
=======
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
// import './style.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(router)

app.mount("#app")
>>>>>>> 5767ac824709e7b443b0e01c241e85702b44d4df
