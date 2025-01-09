import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import { mainPinia } from './store'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(mainPinia)
app.mount('#app')
