import { createApp } from 'vue'

import { createPinia } from 'pinia'

// import { createPinia } from './my-pinia/createPinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
console.log('[ pinia ]-9', pinia)
const app = createApp(App)
app.use(pinia)
app.mount('#app')
