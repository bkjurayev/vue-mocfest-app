import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.min.css'
import './assets/js/app.min.js'
import './assets/js/vendors.min.js'

createApp(App).use(store).use(router).mount('#app')
