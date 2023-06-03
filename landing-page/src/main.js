import { createApp } from 'vue'
import './css/main.css'
import './css/web-header.css'
import App from './App.vue'
import store from './js/store'

createApp(App).use(store).mount('#app');
